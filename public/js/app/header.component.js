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
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.title = "Système abordable de réservation et agenda";
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n        <header class=\"row\">\n            <div class=\"col-md-12\">\n                <my-logo></my-logo>\n            </div>\n            <nav class=\"col-md-12\">\n                <ul class=\"nav nav-pills\">\n                    <li><a>Agenda</a></li>\n                    <li><a>Clients</a></li>\n                    <li><a>\u00C9v\u00E8nements</a></li>\n                    <li><a>Ressources</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
            styles: ["\n        header {\n            width: auto;\n            height: auto;\n            margin-top: 0px;\n            background-color: #A2B5CD;\n            padding: 0 0 8% 0;\n        }\n\n        nav{\n            background-color: white;\n            padding:1%;\n            clear:both;\n            float:left;\n            width:100%;\n        }\n\n        div{\n            float:left;\n            margin:0;\n            padding:0;\n            background-color: #d7e1ee;\n        }\n\n        ul{\n          text-align: left;  \n        }\n\n        li {\n            float: none;\n            display: inline-block;\n            padding: 0 3% 0 0;\n        }\n\n        li a{\n            font-size:1.5vw;\n        }\n\n        li:nth-of-type(1){\n            padding: 0 3% 0 5%;\n        }\n        \n        .router-link-active {\n            background-color: #337ab7;\n            color: white;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQW1FMUM7SUFBQTtRQUNJLFVBQUssR0FBVyw0Q0FBNEMsQ0FBQztJQUNqRSxDQUFDO0lBbkVEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSw4ZEFjVDtZQUNELE1BQU0sRUFBRSxDQUFDLDY1QkE4Q1IsQ0FBQztTQUNMLENBQUM7O3VCQUFBO0lBR0Ysc0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLHVCQUFlLGtCQUUzQixDQUFBIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPG15LWxvZ28+PC9teS1sb2dvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT5BZ2VuZGE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGE+Q2xpZW50czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT7DiXbDqG5lbWVudHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGE+UmVzc291cmNlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EyQjVDRDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDglIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXZ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjElO1xyXG4gICAgICAgICAgICBjbGVhcjpib3RoO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlMWVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMyUgMCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkgYXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuNXZ3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGk6bnRoLW9mLXR5cGUoMSl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMyUgMCA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcclxuICAgIHRpdGxlOiBzdHJpbmcgPSBcIlN5c3TDqG1lIGFib3JkYWJsZSBkZSByw6lzZXJ2YXRpb24gZXQgYWdlbmRhXCI7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
