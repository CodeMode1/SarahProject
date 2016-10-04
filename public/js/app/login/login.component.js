"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-login',
            template: "\n    <ul class=\"nav nav-tabs nav-justified\">\n      <li role=\"presentation\"><a [routerLink]=\"['']\">Home</a></li>\n      <li role=\"presentation\"><a [routerLink]=\"['/auth']\" routerLinkActive=\"active\">Login</a></li>\n    </ul>\n    ",
            styles: ["\n     .active {\n         background-color: #337ab7;\n         color: white;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBa0JsRDtJQUNJO0lBQWdCLENBQUM7SUFFakIsaUNBQVEsR0FBUixjQUFhLENBQUM7SUFuQmxCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsb1BBS1Q7WUFDRCxNQUFNLEVBQUMsQ0FBQyxnR0FLUCxDQUFDO1NBQ0wsQ0FBQzs7c0JBQUE7SUFLRixxQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksc0JBQWMsaUJBSTFCLENBQUEiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktbG9naW4nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFicyBuYXYtanVzdGlmaWVkXCI+XHJcbiAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgW3JvdXRlckxpbmtdPVwiWycnXVwiPkhvbWU8L2E+PC9saT5cclxuICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBbcm91dGVyTGlua109XCJbJy9hdXRoJ11cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+TG9naW48L2E+PC9saT5cclxuICAgIDwvdWw+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOltgXHJcbiAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XHJcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
