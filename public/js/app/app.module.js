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
var header_component_1 = require('./header.component');
var header_logo_component_1 = require('./header.logo.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, header_logo_component_1.LogoComponent],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [core_2.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBaUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRTNDLDhCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ2pELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELHNDQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBUXhEO0lBQUE7SUFBd0IsQ0FBQztJQU56QjtRQUFDLGVBQVEsQ0FBQztZQUNWLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQUUsa0NBQWUsRUFBRSxxQ0FBYSxDQUFDO1lBQzVELE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSwyQkFBbUIsRUFBRSxpQkFBVSxDQUFDO1lBQ3RFLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsU0FBUyxFQUFFLENBQUMsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUMsQ0FBQztTQUN2RSxDQUFDOztpQkFBQTtJQUNzQixnQkFBQztBQUFELENBQXhCLEFBQXlCLElBQUE7QUFBWixpQkFBUyxZQUFHLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIubG9nby5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIExvZ29Db21wb25lbnRdLCBcclxuaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBIdHRwTW9kdWxlXSxcclxuYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxucHJvdmlkZXJzOiBbcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fSldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
