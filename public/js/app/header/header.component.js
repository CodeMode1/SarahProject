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
            styles: ["\n        header {\n            width: auto;\n            height: auto;\n            margin-top: 0px;\n            background-color: #A2B5CD;\n            padding: 0 0 8% 0;\n        }\n\n        .row{\n            margin-left:0;\n            margin-right:0;\n        }\n\n        nav{\n            background-color: white;\n            padding:1% 0 1% 0;\n            clear:both;\n            float:left;\n            width:100%;\n        }\n\n        div{\n            float:left;\n            margin:0;\n            padding:0;\n            background-color: #d7e1ee;\n        }\n\n        ul{\n          text-align: left;  \n        }\n\n        li {\n            float: none;\n            display: inline-block;\n            padding: 0 3% 0 0;\n        }\n\n        li a{\n            font-size:1.5vw;\n        }\n\n        li:nth-of-type(1){\n            padding: 0 3% 0 5%;\n        }\n        \n        .router-link-active {\n            background-color: #337ab7;\n            color: white;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUF3RTFDO0lBQUE7UUFDSSxVQUFLLEdBQVcsNENBQTRDLENBQUM7SUFDakUsQ0FBQztJQXhFRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsOGRBY1Q7WUFDRCxNQUFNLEVBQUUsQ0FBQyx5L0JBbURSLENBQUM7U0FDTCxDQUFDOzt1QkFBQTtJQUdGLHNCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSx1QkFBZSxrQkFFM0IsQ0FBQSIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8bXktbG9nbz48L215LWxvZ28+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXBpbGxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhPkFnZW5kYTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT5DbGllbnRzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhPsOJdsOobmVtZW50czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YT5SZXNzb3VyY2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTJCNUNEO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgOCUgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDowO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzoxJSAwIDElIDA7XHJcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2UxZWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzJSAwIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaSBhe1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS41dnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaTpudGgtb2YtdHlwZSgxKXtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzJSAwIDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG4gICAgdGl0bGU6IHN0cmluZyA9IFwiU3lzdMOobWUgYWJvcmRhYmxlIGRlIHLDqXNlcnZhdGlvbiBldCBhZ2VuZGFcIjtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
