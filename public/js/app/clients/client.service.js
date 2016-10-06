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
var http_1 = require('@angular/http');
var client_1 = require('./client');
require('rxjs/Rx');
var Observable_1 = require('rxjs/Observable');
var ClientService = (function () {
    function ClientService(_http) {
        this._http = _http;
        this.clients = [];
    }
    ClientService.prototype.creerClient = function (client) {
        var body = JSON.stringify(client);
        var header = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/client' + token, body, { headers: header })
            .map(function (response) {
            var data = response.json().obj;
            var client = new client_1.Client(data.prenom, data.nom, data.noCompte, data.courriel, data.compagnie, data.adresse, data.ville, data.codePostal, data.cell, data.telPrincipal, data.province, data.pays, data.fax, data.telSecondaire, data.creerPar);
            return client;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json() || 'server error'); });
    };
    ClientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientService);
    return ClientService;
}());
exports.ClientService = ClientService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQsdUJBQXVCLFVBQVUsQ0FBQyxDQUFBO0FBQ2xDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFHN0M7SUFHSSx1QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFGL0IsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQUVZLENBQUM7SUFFcEMsbUNBQVcsR0FBWCxVQUFZLE1BQWM7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDhCQUE4QixHQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUM7YUFDbEYsR0FBRyxDQUFDLFVBQUMsUUFBa0I7WUFDcEIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQzNGLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUN0RixJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksY0FBYyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBbkJMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFvQmIsb0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHFCQUFhLGdCQW1CekIsQ0FBQSIsImZpbGUiOiJjbGllbnRzL2NsaWVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xpZW50U2VydmljZSB7XHJcbiAgICBjbGllbnRzOiBDbGllbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGNyZWVyQ2xpZW50KGNsaWVudDogQ2xpZW50KXtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY2xpZW50KTtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyAnP3Rva2VuPScgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jbGllbnQnICsgdG9rZW4sIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJ9KVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWVudCA9IG5ldyBDbGllbnQoZGF0YS5wcmVub20sIGRhdGEubm9tLCBkYXRhLm5vQ29tcHRlLCBkYXRhLmNvdXJyaWVsLCBkYXRhLmNvbXBhZ25pZSxcclxuICAgICAgICAgICAgICAgIGRhdGEuYWRyZXNzZSwgZGF0YS52aWxsZSwgZGF0YS5jb2RlUG9zdGFsLCBkYXRhLmNlbGwsIGRhdGEudGVsUHJpbmNpcGFsLCBkYXRhLnByb3ZpbmNlLCBcclxuICAgICAgICAgICAgICAgIGRhdGEucGF5cywgZGF0YS5mYXgsIGRhdGEudGVsU2Vjb25kYWlyZSwgZGF0YS5jcmVlclBhcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpZW50O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkgfHwgJ3NlcnZlciBlcnJvcicpKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
