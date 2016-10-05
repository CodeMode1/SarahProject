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
var auth_service_1 = require('../auth/auth.service');
var HeaderComponent = (function () {
    function HeaderComponent(_authService) {
        this._authService = _authService;
        this.title = "Système abordable de réservation et agenda";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.estLogIn = function () {
        return this._authService.estLogIn();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n        <header class=\"row\">\n            <div class=\"col-md-12\">\n                <my-logo></my-logo>\n            </div>\n            <nav class=\"col-md-12\">\n                <ul class=\"nav nav-pills\">\n                    <li *ngIf=\"estLogIn()\"><a>Agenda</a></li>\n                    <li *ngIf=\"estLogIn()\"><a>Clients</a></li>\n                    <li *ngIf=\"estLogIn()\"><a>\u00C9v\u00E8nements</a></li>\n                    <li *ngIf=\"estLogIn()\"><a>Ressources</a></li>\n                </ul>\n            </nav>\n        </header>\n    ",
            styles: ["\n        header {\n            width: auto;\n            height: auto;\n            margin-top: 0px;\n            background-color: #A2B5CD;\n            padding: 0 0 8% 0;\n            position:relative;\n        }\n\n        .row{\n            margin-left:0;\n            margin-right:0;\n        }\n\n        nav{\n            background-color: white;\n            padding:1% 0 1% 0;\n            clear:both;\n            float:left;\n            width:100%;\n        }\n\n        div{\n            float:left;\n            margin:0;\n            padding:0;\n            background-color: #d7e1ee;\n        }\n\n        ul{\n          text-align: left;  \n        }\n\n        li {\n            float: none;\n            display: inline-block;\n            padding: 0 3% 0 0;\n        }\n\n        li a{\n            font-size:1.5vw;\n        }\n\n        li:nth-of-type(1){\n            padding: 0 3% 0 5%;\n        }\n        \n        .router-link-active {\n            background-color: #337ab7;\n            color: white;\n        }\n\n        .my-login{\n            position:absolute;\n            bottom:0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQTRCLHNCQUFzQixDQUFDLENBQUE7QUE4RW5EO0lBR0kseUJBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRjdDLFVBQUssR0FBVyw0Q0FBNEMsQ0FBQztJQUk3RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQXhGTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsa2pCQWNUO1lBQ0QsTUFBTSxFQUFFLENBQUMsaW5DQXlEUixDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUFjRixzQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksdUJBQWUsa0JBYTNCLENBQUEiLCJmaWxlIjoiaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPG15LWxvZ28+PC9teS1sb2dvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi1waWxsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImVzdExvZ0luKClcIj48YT5BZ2VuZGE8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJlc3RMb2dJbigpXCI+PGE+Q2xpZW50czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdJZj1cImVzdExvZ0luKClcIj48YT7DiXbDqG5lbWVudHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJlc3RMb2dJbigpXCI+PGE+UmVzc291cmNlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EyQjVDRDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDglIDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXZ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjElIDAgMSUgMDtcclxuICAgICAgICAgICAgY2xlYXI6Ym90aDtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdntcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZTFlZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMlIDAgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpIGF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjV2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpOm50aC1vZi10eXBlKDEpe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMlIDAgNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubXktbG9naW57XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206MDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHRpdGxlOiBzdHJpbmcgPSBcIlN5c3TDqG1lIGFib3JkYWJsZSBkZSByw6lzZXJ2YXRpb24gZXQgYWdlbmRhXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgIH1cclxuXHJcbiAgICBlc3RMb2dJbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5lc3RMb2dJbigpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
