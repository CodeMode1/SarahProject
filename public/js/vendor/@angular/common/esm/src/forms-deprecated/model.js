/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import { EventEmitter } from '../facade/async';
import { ListWrapper, StringMapWrapper } from '../facade/collection';
import { isBlank, isPresent, isPromise, normalizeBool } from '../facade/lang';
/**
 * Indicates that a Control is valid, i.e. that no errors exist in the input value.
 */
export const VALID = 'VALID';
/**
 * Indicates that a Control is invalid, i.e. that an error exists in the input value.
 */
export const INVALID = 'INVALID';
/**
 * Indicates that a Control is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
export const PENDING = 'PENDING';
export function isControl(control) {
    return control instanceof AbstractControl;
}
function _find(control, path) {
    if (isBlank(path))
        return null;
    if (!(path instanceof Array)) {
        path = path.split('/');
    }
    if (path instanceof Array && ListWrapper.isEmpty(path))
        return null;
    return path.reduce((v, name) => {
        if (v instanceof ControlGroup) {
            return isPresent(v.controls[name]) ? v.controls[name] : null;
        }
        else if (v instanceof ControlArray) {
            var index = name;
            return isPresent(v.at(index)) ? v.at(index) : null;
        }
        else {
            return null;
        }
    }, control);
}
function toObservable(r) {
    return isPromise(r) ? PromiseObservable.create(r) : r;
}
/**
 * @experimental
 */
export class AbstractControl {
    constructor(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        this._pristine = true;
        this._touched = false;
    }
    get value() { return this._value; }
    get status() { return this._status; }
    get valid() { return this._status === VALID; }
    /**
     * Returns the errors of this control.
     */
    get errors() { return this._errors; }
    get pristine() { return this._pristine; }
    get dirty() { return !this.pristine; }
    get touched() { return this._touched; }
    get untouched() { return !this._touched; }
    get valueChanges() { return this._valueChanges; }
    get statusChanges() { return this._statusChanges; }
    get pending() { return this._status == PENDING; }
    markAsTouched() { this._touched = true; }
    markAsDirty({ onlySelf } = {}) {
        onlySelf = normalizeBool(onlySelf);
        this._pristine = false;
        if (isPresent(this._parent) && !onlySelf) {
            this._parent.markAsDirty({ onlySelf: onlySelf });
        }
    }
    markAsPending({ onlySelf } = {}) {
        onlySelf = normalizeBool(onlySelf);
        this._status = PENDING;
        if (isPresent(this._parent) && !onlySelf) {
            this._parent.markAsPending({ onlySelf: onlySelf });
        }
    }
    setParent(parent) { this._parent = parent; }
    updateValueAndValidity({ onlySelf, emitEvent } = {}) {
        onlySelf = normalizeBool(onlySelf);
        emitEvent = isPresent(emitEvent) ? emitEvent : true;
        this._updateValue();
        this._errors = this._runValidator();
        this._status = this._calculateStatus();
        if (this._status == VALID || this._status == PENDING) {
            this._runAsyncValidator(emitEvent);
        }
        if (emitEvent) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        if (isPresent(this._parent) && !onlySelf) {
            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
    }
    _runValidator() {
        return isPresent(this.validator) ? this.validator(this) : null;
    }
    _runAsyncValidator(emitEvent) {
        if (isPresent(this.asyncValidator)) {
            this._status = PENDING;
            this._cancelExistingSubscription();
            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription = obs.subscribe({ next: (res) => this.setErrors(res, { emitEvent: emitEvent }) });
        }
    }
    _cancelExistingSubscription() {
        if (isPresent(this._asyncValidationSubscription)) {
            this._asyncValidationSubscription.unsubscribe();
        }
    }
    /**
     * Sets errors on a control.
     *
     * This is used when validations are run not automatically, but manually by the user.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ## Usage
     *
     * ```
     * var login = new Control("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.updateValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    setErrors(errors, { emitEvent } = {}) {
        emitEvent = isPresent(emitEvent) ? emitEvent : true;
        this._errors = errors;
        this._status = this._calculateStatus();
        if (emitEvent) {
            this._statusChanges.emit(this._status);
        }
        if (isPresent(this._parent)) {
            this._parent._updateControlsErrors();
        }
    }
    find(path) { return _find(this, path); }
    getError(errorCode, path = null) {
        var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.find(path) : this;
        if (isPresent(control) && isPresent(control._errors)) {
            return StringMapWrapper.get(control._errors, errorCode);
        }
        else {
            return null;
        }
    }
    hasError(errorCode, path = null) {
        return isPresent(this.getError(errorCode, path));
    }
    get root() {
        let x = this;
        while (isPresent(x._parent)) {
            x = x._parent;
        }
        return x;
    }
    /** @internal */
    _updateControlsErrors() {
        this._status = this._calculateStatus();
        if (isPresent(this._parent)) {
            this._parent._updateControlsErrors();
        }
    }
    /** @internal */
    _initObservables() {
        this._valueChanges = new EventEmitter();
        this._statusChanges = new EventEmitter();
    }
    _calculateStatus() {
        if (isPresent(this._errors))
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    }
}
/**
 * Defines a part of a form that cannot be divided into other controls. `Control`s have values and
 * validation state, which is determined by an optional validation function.
 *
 * `Control` is one of the three fundamental building blocks used to define forms in Angular, along
 * with {@link ControlGroup} and {@link ControlArray}.
 *
 * ## Usage
 *
 * By default, a `Control` is created for every `<input>` or other form component.
 * With {@link NgFormControl} or {@link NgFormModel} an existing {@link Control} can be
 * bound to a DOM element instead. This `Control` can be configured with a custom
 * validation function.
 *
 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
 *
 * @experimental
 */
export class Control extends AbstractControl {
    constructor(value = null, validator = null, asyncValidator = null) {
        super(validator, asyncValidator);
        this._value = value;
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        this._initObservables();
    }
    /**
     * Set the value of the control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `Control`
     * and not its parent component. If `emitEvent` is `true`, this change will cause a
     * `valueChanges` event on the `Control` to be emitted. Both of these options default to
     * `false`.
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     */
    updateValue(value, { onlySelf, emitEvent, emitModelToViewChange } = {}) {
        emitModelToViewChange = isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
        this._value = value;
        if (isPresent(this._onChange) && emitModelToViewChange)
            this._onChange(this._value);
        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
    }
    /**
     * @internal
     */
    _updateValue() { }
    /**
     * @internal
     */
    _anyControlsHaveStatus(status) { return false; }
    /**
     * Register a listener for change events.
     */
    registerOnChange(fn) { this._onChange = fn; }
}
/**
 * Defines a part of a form, of fixed length, that can contain other controls.
 *
 * A `ControlGroup` aggregates the values of each {@link Control} in the group.
 * The status of a `ControlGroup` depends on the status of its children.
 * If one of the controls in a group is invalid, the entire group is invalid.
 * Similarly, if a control changes its value, the entire group changes as well.
 *
 * `ControlGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {@link Control} and {@link ControlArray}. {@link ControlArray} can also contain other
 * controls, but is of variable length.
 *
 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
 *
 * @experimental
 */
export class ControlGroup extends AbstractControl {
    constructor(controls, optionals = null, validator = null, asyncValidator = null) {
        super(validator, asyncValidator);
        this.controls = controls;
        this._optionals = isPresent(optionals) ? optionals : {};
        this._initObservables();
        this._setParentForControls();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Register a control with the group's list of controls.
     */
    registerControl(name, control) {
        this.controls[name] = control;
        control.setParent(this);
    }
    /**
     * Add a control to this group.
     */
    addControl(name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
    }
    /**
     * Remove a control from this group.
     */
    removeControl(name) {
        StringMapWrapper.delete(this.controls, name);
        this.updateValueAndValidity();
    }
    /**
     * Mark the named control as non-optional.
     */
    include(controlName) {
        StringMapWrapper.set(this._optionals, controlName, true);
        this.updateValueAndValidity();
    }
    /**
     * Mark the named control as optional.
     */
    exclude(controlName) {
        StringMapWrapper.set(this._optionals, controlName, false);
        this.updateValueAndValidity();
    }
    /**
     * Check whether there is a control with the given name in the group.
     */
    contains(controlName) {
        var c = StringMapWrapper.contains(this.controls, controlName);
        return c && this._included(controlName);
    }
    /** @internal */
    _setParentForControls() {
        StringMapWrapper.forEach(this.controls, (control, name) => { control.setParent(this); });
    }
    /** @internal */
    _updateValue() { this._value = this._reduceValue(); }
    /** @internal */
    _anyControlsHaveStatus(status) {
        var res = false;
        StringMapWrapper.forEach(this.controls, (control, name) => {
            res = res || (this.contains(name) && control.status == status);
        });
        return res;
    }
    /** @internal */
    _reduceValue() {
        return this._reduceChildren({}, (acc, control, name) => {
            acc[name] = control.value;
            return acc;
        });
    }
    /** @internal */
    _reduceChildren(initValue, fn) {
        var res = initValue;
        StringMapWrapper.forEach(this.controls, (control, name) => {
            if (this._included(name)) {
                res = fn(res, control, name);
            }
        });
        return res;
    }
    /** @internal */
    _included(controlName) {
        var isOptional = StringMapWrapper.contains(this._optionals, controlName);
        return !isOptional || StringMapWrapper.get(this._optionals, controlName);
    }
}
/**
 * Defines a part of a form, of variable length, that can contain other controls.
 *
 * A `ControlArray` aggregates the values of each {@link Control} in the group.
 * The status of a `ControlArray` depends on the status of its children.
 * If one of the controls in a group is invalid, the entire array is invalid.
 * Similarly, if a control changes its value, the entire array changes as well.
 *
 * `ControlArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {@link Control} and {@link ControlGroup}. {@link ControlGroup} can also contain
 * other controls, but is of fixed length.
 *
 * ## Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `ControlArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `ControlArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
 *
 * @experimental
 */
export class ControlArray extends AbstractControl {
    constructor(controls, validator = null, asyncValidator = null) {
        super(validator, asyncValidator);
        this.controls = controls;
        this._initObservables();
        this._setParentForControls();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Get the {@link AbstractControl} at the given `index` in the array.
     */
    at(index) { return this.controls[index]; }
    /**
     * Insert a new {@link AbstractControl} at the end of the array.
     */
    push(control) {
        this.controls.push(control);
        control.setParent(this);
        this.updateValueAndValidity();
    }
    /**
     * Insert a new {@link AbstractControl} at the given `index` in the array.
     */
    insert(index, control) {
        ListWrapper.insert(this.controls, index, control);
        control.setParent(this);
        this.updateValueAndValidity();
    }
    /**
     * Remove the control at the given `index` in the array.
     */
    removeAt(index) {
        ListWrapper.removeAt(this.controls, index);
        this.updateValueAndValidity();
    }
    /**
     * Length of the control array.
     */
    get length() { return this.controls.length; }
    /** @internal */
    _updateValue() { this._value = this.controls.map((control) => control.value); }
    /** @internal */
    _anyControlsHaveStatus(status) {
        return this.controls.some(c => c.status == status);
    }
    /** @internal */
    _setParentForControls() {
        this.controls.forEach((control) => { control.setParent(this); });
    }
}
//# sourceMappingURL=model.js.map