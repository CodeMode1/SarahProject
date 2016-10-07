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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header/header.component');
var header_logo_component_1 = require('./header/header.logo.component');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./login/home.component');
var app_routes_1 = require('./app.routes');
//auth
var auth_component_1 = require('./auth/auth.component');
var signin_component_1 = require('./auth/signin.component');
var logout_component_1 = require('./auth/logout.component');
var signup_component_1 = require('./auth/signup.component');
var auth_service_1 = require('./auth/auth.service');
//errors
var error_component_1 = require('./errors/error.component');
var error_service_1 = require('./errors/error.service');
//client
var client_component_1 = require('./clients/client.component');
var clients_component_1 = require('./clients/clients.component');
var client_creer_component_1 = require('./clients/client-creer.component');
var client_widgets_component_1 = require('./clients/client-widgets.component');
var client_list_component_1 = require('./clients/client-list.component');
var client_service_1 = require('./clients/client.service');
//pipes
var capitalize_pipe_1 = require('./pipes/capitalize.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, header_logo_component_1.LogoComponent, login_component_1.LoginComponent, home_component_1.HomeComponent, signin_component_1.SigninComponent, logout_component_1.LogoutComponent,
                signup_component_1.SignupComponent, auth_component_1.AuthComponent, error_component_1.ErrorComponent, client_component_1.ClientComponent, clients_component_1.ClientsComponent, client_creer_component_1.CreerClientComponent, client_widgets_component_1.ClientWidgetsComponent,
                client_list_component_1.ClientListComponent, capitalize_pipe_1.CapitalizePipe],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routes_1.routing],
            bootstrap: [app_component_1.AppComponent],
            providers: [core_2.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }), auth_service_1.AuthService, error_service_1.ErrorService, client_service_1.ClientService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDhCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELGlDQUFnQywyQkFBMkIsQ0FBQyxDQUFBO0FBQzVELHNDQUE4QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQy9ELGdDQUErQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE4Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXZELDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUV2QyxNQUFNO0FBQ04sK0JBQThCLHVCQUF1QixDQUFDLENBQUE7QUFDdEQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsaUNBQWdDLHlCQUF5QixDQUFDLENBQUE7QUFDMUQsNkJBQTRCLHFCQUFxQixDQUFDLENBQUE7QUFFbEQsUUFBUTtBQUNSLGdDQUErQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQzFELDhCQUE2Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRXRELFFBQVE7QUFDUixpQ0FBZ0MsNEJBQTRCLENBQUMsQ0FBQTtBQUM3RCxrQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQUMvRCx1Q0FBcUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN4RSx5Q0FBdUMsb0NBQW9DLENBQUMsQ0FBQTtBQUM1RSxzQ0FBb0MsaUNBQWlDLENBQUMsQ0FBQTtBQUN0RSwrQkFBOEIsMEJBQTBCLENBQUMsQ0FBQTtBQUV6RCxPQUFPO0FBQ1AsZ0NBQStCLHlCQUF5QixDQUFDLENBQUE7QUFVekQ7SUFBQTtJQUF3QixDQUFDO0lBUnpCO1FBQUMsZUFBUSxDQUFDO1lBQ1YsWUFBWSxFQUFFLENBQUMsNEJBQVksRUFBRSxrQ0FBZSxFQUFFLHFDQUFhLEVBQUUsZ0NBQWMsRUFBRSw4QkFBYSxFQUFFLGtDQUFlLEVBQUUsa0NBQWU7Z0JBQ3hILGtDQUFlLEVBQUUsOEJBQWEsRUFBRSxnQ0FBYyxFQUFFLGtDQUFlLEVBQUUsb0NBQWdCLEVBQUUsNkNBQW9CLEVBQUUsaURBQXNCO2dCQUMvSCwyQ0FBbUIsRUFBRSxnQ0FBYyxDQUFDO1lBQ3hDLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSwyQkFBbUIsRUFBRSxpQkFBVSxFQUFFLG9CQUFPLENBQUM7WUFDL0UsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixTQUFTLEVBQUUsQ0FBQyxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQW9CLEVBQUMsQ0FBQyxFQUFFLDBCQUFXLEVBQUUsNEJBQVksRUFBRSw4QkFBYSxDQUFDO1NBQ2pILENBQUM7O2lCQUFBO0lBQ3NCLGdCQUFDO0FBQUQsQ0FBeEIsQUFBeUIsSUFBQTtBQUFaLGlCQUFTLFlBQUcsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgcHJvdmlkZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmxvZ28uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2hvbWUuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xyXG5cclxuLy9hdXRoXHJcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvYXV0aC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tICcuL2F1dGgvc2lnbmluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9sb2dvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL3NpZ251cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuLy9lcnJvcnNcclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9ycy9lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tICcuL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcclxuXHJcbi8vY2xpZW50XHJcbmltcG9ydCB7IENsaWVudENvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50cy9jbGllbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2xpZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENyZWVyQ2xpZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnRzL2NsaWVudC1jcmVlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbGllbnRXaWRnZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnRzL2NsaWVudC13aWRnZXRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENsaWVudExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudHMvY2xpZW50LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2xpZW50U2VydmljZSB9IGZyb20gJy4vY2xpZW50cy9jbGllbnQuc2VydmljZSc7XHJcblxyXG4vL3BpcGVzXHJcbmltcG9ydCB7IENhcGl0YWxpemVQaXBlIH0gZnJvbSAnLi9waXBlcy9jYXBpdGFsaXplLnBpcGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIExvZ29Db21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBIb21lQ29tcG9uZW50LCBTaWduaW5Db21wb25lbnQsIExvZ291dENvbXBvbmVudCwgXHJcbiAgICBTaWdudXBDb21wb25lbnQsIEF1dGhDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBDbGllbnRDb21wb25lbnQsIENsaWVudHNDb21wb25lbnQsIENyZWVyQ2xpZW50Q29tcG9uZW50LCBDbGllbnRXaWRnZXRzQ29tcG9uZW50LFxyXG4gICAgQ2xpZW50TGlzdENvbXBvbmVudCwgQ2FwaXRhbGl6ZVBpcGVdLCBcclxuaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlLCByb3V0aW5nXSxcclxuYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxucHJvdmlkZXJzOiBbcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSksIEF1dGhTZXJ2aWNlLCBFcnJvclNlcnZpY2UsIENsaWVudFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
