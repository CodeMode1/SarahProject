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
var client_service_1 = require('./client.service');
var error_service_1 = require('../errors/error.service');
var ClientListComponent = (function () {
    function ClientListComponent(_clientService, _errorService) {
        this._clientService = _clientService;
        this._errorService = _errorService;
        this.titre = "Liste des Clients";
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('dans on init');
        this._clientService.getClients().subscribe(function (data) { return _this.clients = data; }, function (error) { return _this._errorService.handleError(error); });
    };
    ClientListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-client-list',
            templateUrl: 'client-list.component.html',
            styles: ["\n        section{\n            padding: 2% 0 0 0;\n        }\n\n        td, th{\n            text-align:left;\n        }\n\n        .panel-heading{\n            text-align:center;\n        }\n\n    \n        \n    "]
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, error_service_1.ErrorService])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFFbEQsK0JBQThCLGtCQUFrQixDQUFDLENBQUE7QUFDakQsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUF1QnZEO0lBSUksNkJBQW9CLGNBQTZCLEVBQVUsYUFBMkI7UUFBbEUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUh0RixVQUFLLEdBQVcsbUJBQW1CLENBQUM7SUFHc0QsQ0FBQztJQUUzRixzQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUN0QyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFuQixDQUFtQixFQUMzQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ04sQ0FBQztJQWpDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLE1BQU0sRUFBRSxDQUFDLHlOQWVSLENBQUM7U0FDTCxDQUFDOzsyQkFBQTtJQWNGLDBCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSwyQkFBbUIsc0JBYS9CLENBQUEiLCJmaWxlIjoiY2xpZW50cy9jbGllbnQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCB7IENsaWVudFNlcnZpY2UgfSBmcm9tICcuL2NsaWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1jbGllbnQtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NsaWVudC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICBzZWN0aW9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJSAwIDAgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkLCB0aHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhbmVsLWhlYWRpbmd7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBcclxuICAgICAgICBcclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHRpdHJlOiBzdHJpbmcgPSBcIkxpc3RlIGRlcyBDbGllbnRzXCI7XHJcbiAgICBjbGllbnRzOiBDbGllbnRbXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2xpZW50U2VydmljZTogQ2xpZW50U2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYW5zIG9uIGluaXQnKTtcclxuICAgICAgICB0aGlzLl9jbGllbnRTZXJ2aWNlLmdldENsaWVudHMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5jbGllbnRzID0gZGF0YSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICk7IFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
