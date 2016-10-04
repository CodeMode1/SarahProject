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
var LogoComponent = (function () {
    function LogoComponent() {
        this.alt = "Sarah logo";
        this.path = "./img/sarah-logo.png";
    }
    LogoComponent.prototype.ngOnInit = function () { };
    LogoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-logo',
            template: "\n    <div>\n        <img [src]=\"path\" alt=\"{{alt}}\">\n    </div>\n    ",
            styles: ["\n        img {\n            max-width:100%;\n            height:auto;\n            display:inline-block;\n            padding:20%;\n        }\n\n        div{\n            display:block;\n            float:left;\n            background-color: #e7edf5;\n            width:15%;\n            text-align:center;\n        }\n    "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LogoComponent);
    return LogoComponent;
}());
exports.LogoComponent = LogoComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBNEJsRDtJQUdJO1FBRkEsUUFBRyxHQUFXLFlBQVksQ0FBQztRQUMzQixTQUFJLEdBQVcsc0JBQXNCLENBQUM7SUFDdEIsQ0FBQztJQUVqQixnQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQS9CbEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSw2RUFJVDtZQUNELE1BQU0sRUFBRSxDQUFDLHNVQWVSO2FBQ0E7U0FDSixDQUFDOztxQkFBQTtJQU9GLG9CQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxxQkFBYSxnQkFNekIsQ0FBQSIsImZpbGUiOiJoZWFkZXIubG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1sb2dvJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgW3NyY109XCJwYXRoXCIgYWx0PVwie3thbHR9fVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6YXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MjAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlZGY1O1xyXG4gICAgICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYWx0OiBzdHJpbmcgPSBcIlNhcmFoIGxvZ29cIjtcclxuICAgIHBhdGg6IHN0cmluZyA9IFwiLi9pbWcvc2FyYWgtbG9nby5wbmdcIjtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
