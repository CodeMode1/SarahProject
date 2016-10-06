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
var forms_1 = require('@angular/forms');
var client_1 = require('./client');
var error_service_1 = require('../errors/error.service');
var CreerClientComponent = (function () {
    function CreerClientComponent(_formBuilder, _clientService, _errorService) {
        this._formBuilder = _formBuilder;
        this._clientService = _clientService;
        this._errorService = _errorService;
        this.identification = "Identification";
        this.gestion = "Gestion";
    }
    CreerClientComponent.prototype.ngOnInit = function () {
        this.creerClientForm = this._formBuilder.group({
            prenom: ['', forms_1.Validators.required],
            nom: ['', forms_1.Validators.required],
            noCompte: ['', forms_1.Validators.required],
            courriel: ['', [forms_1.Validators.required, this.estCourrielOK]],
            cell: ['', forms_1.Validators.required],
            compagnie: ['', forms_1.Validators.required],
            adresse: ['', forms_1.Validators.required],
            ville: ['', forms_1.Validators.required],
            codePostal: ['', forms_1.Validators.required],
            telPrincipal: ['', forms_1.Validators.required],
            province: ['', forms_1.Validators.required],
            pays: ['', forms_1.Validators.required],
            fax: [''],
            telSecondaire: ['']
        });
    };
    CreerClientComponent.prototype.estCourrielOK = function (control) {
        if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
            return { courrielInvalide: true };
    };
    CreerClientComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.creerClientForm.value);
        var client = new client_1.Client(this.creerClientForm.value.prenom, this.creerClientForm.value.nom, this.creerClientForm.value.noCompte, this.creerClientForm.value.courriel, this.creerClientForm.value.compagnie, this.creerClientForm.value.adresse, this.creerClientForm.value.ville, this.creerClientForm.value.codePostal, this.creerClientForm.value.cell, this.creerClientForm.value.telPrincipal, this.creerClientForm.value.province, this.creerClientForm.value.pays, this.creerClientForm.value.fax, this.creerClientForm.value.telSecondaire);
        console.log('creer Client: ' + client.prenom + " " + client.nom + " " + client.courriel);
        this._clientService.creerClient(client)
            .subscribe(function (data) {
            console.log('data du serveur :');
            console.log(data);
            _this._clientService.clients.push(data);
            alert('Client sauvegarder: ' + (data.prenom) + " " + (data.nom));
        }, function (error) { return _this._errorService.handleError(error); });
    };
    CreerClientComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-creer-client',
            template: "\n    <section class=\"col-md-12\">\n        <div class=\"col-md-4 title\">\n            <h2>{{identification}}</h2>\n        </div>\n        <div class=\"col-md-2\">\n        </div>\n        <div class=\"col-md-6 title\">\n            <h2>{{gestion}}</h2>\n        </div>\n    </section>\n    <section>\n        <form [formGroup]=\"creerClientForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"col-md-4 outer\">\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"prenom\">Pr\u00E9nom : </label>\n                    <input type=\"text\" id=\"prenom\" class=\"form-control\" formControlName=\"prenom\">\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"nom\">Nom : </label>\n                    <input type=\"text\" id=\"nom\" class=\"form-control\" formControlName=\"nom\">\n                </div>\n            </div>\n            <div class=\"col-md-4 outer\">\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"noCompte\">No Compte : </label>\n                    <input type=\"text\" id=\"noCompte\" class=\"form-control\" formControlName=\"noCompte\">\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"courriel\">Courriel : </label>\n                    <input type=\"email\" id=\"courriel\" class=\"form-control\" placeholder=\"mon@courriel.com\" formControlName=\"courriel\">\n                </div>\n            </div>\n            <div class=\"col-md-4 outer\">\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"cell\">Cellulaire : </label>\n                    <input type=\"text\" id=\"cell\" class=\"form-control\" formControlName=\"cell\">\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"compagnie\">Compagnie : </label>\n                    <input type=\"text\" id=\"compagnie\" class=\"form-control\" formControlName=\"compagnie\">\n                </div>\n            </div>\n            <div class=\"col-md-4 outer\">\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"adresse\">Adresse : </label>\n                    <input type=\"text\" id=\"adresse\" class=\"form-control\" formControlName=\"adresse\">\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"ville\">Ville : </label>\n                    <input type=\"text\" id=\"ville\" class=\"form-control\" formControlName=\"ville\">\n                </div>\n            </div>\n            <div class=\"col-md-4 outer\">\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"codePostal\">Code Postal : </label>\n                    <input type=\"text\" id=\"codePostal\" class=\"form-control\" formControlName=\"codePostal\">\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"telPrincipal\">T\u00E9l. Principal : </label>\n                    <input type=\"text\" id=\"telPrincipal\" class=\"form-control\" formControlName=\"telPrincipal\">\n                </div>\n            </div>\n            <div class=\"col-md-4 outer\">\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"province\">Province : </label>\n                    <input type=\"text\" id=\"province\" class=\"form-control\" formControlName=\"province\">\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"pays\">Pays : </label>\n                    <input type=\"text\" id=\"pays\" class=\"form-control\" formControlName=\"pays\">\n                </div>\n            </div>\n            <div class=\"col-md-4 outer\">\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"fax\">Fax : </label>\n                    <input type=\"text\" id=\"fax\" class=\"form-control\" formControlName=\"fax\">\n                </div>\n                <div class=\"col-md-2 form-group\">\n                    <label for=\"telSecondaire\">T\u00E9l. Secondaire : </label>\n                    <input type=\"text\" id=\"telSecondaire\" class=\"form-control\" formControlName=\"telSecondaire\">\n                </div>\n            </div>\n            <div class=\"col-md-12 footer\">\n                <div class=\"col-md-4 divFooter\">\n                    <button type=\"button\" class=\"btn btn-primary\">\n                        <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n                        Actualiser\n                    </button>\n                </div>\n                <div class=\"col-md-4 divFooter\">\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!creerClientForm.valid\">\n                        <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n                        Enregistrer\n                    </button>\n                </div>\n                <div class=\"col-md-4 divFooter\">\n                    <button type=\"button\" class=\"btn btn-primary\">\n                        <span class=\"glyphicon glyphicon-print\" aria-hidden=\"true\"></span>\n                        Copie Client\n                    </button>\n                </div>\n            </div>\n        </form>\n    </section>   \n    ",
            styles: ["\n        .outer{\n            float:left;\n            clear:both;\n            padding: 0 0 1% 0;\n        }\n        .form-group{\n            float:left;\n            width:50%;\n        }\n\n        divFooter{\n            text-align:center;\n        }\n\n        .footer{\n             border-top: 2px solid black;\n        }\n\n        button{  \n            display:block;\n            margin: 0 auto;\n        }\n\n        .col-md-12{\n            padding: 2% 0 2% 0;\n        }\n\n        h2{\n            padding-top:1%;\n            padding-bottom:1%;\n        }\n\n        .title{\n            text-align:left;\n        }\n        \n\n    "
            ]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, client_service_1.ClientService, error_service_1.ErrorService])
    ], CreerClientComponent);
    return CreerClientComponent;
}());
exports.CreerClientComponent = CreerClientComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LWNyZWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELCtCQUE4QixrQkFBa0IsQ0FBQyxDQUFBO0FBQ2pELHNCQUFnRSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pGLHVCQUF1QixVQUFVLENBQUMsQ0FBQTtBQUNsQyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQXdKdkQ7SUFLSSw4QkFBb0IsWUFBeUIsRUFBVSxjQUE2QixFQUFVLGFBQTJCO1FBQXJHLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUp6SCxtQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLFlBQU8sR0FBVyxTQUFTLENBQUM7SUFHaUcsQ0FBQztJQUU5SCx1Q0FBUSxHQUFSO1FBQ0ssSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM1QyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDakMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQzlCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekQsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQy9CLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFD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O1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFDLGcyS0F5R1I7WUFDRCxNQUFNLEVBQUUsQ0FBQyw4b0JBc0NSO2FBQ0E7U0FDSixDQUFDOzs0QkFBQTtJQWtERiwyQkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksNEJBQW9CLHVCQWlEaEMsQ0FBQSIsImZpbGUiOiJjbGllbnRzL2NsaWVudC1jcmVlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9jbGllbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuL2NsaWVudCc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktY3JlZXItY2xpZW50JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IHRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMj57e2lkZW50aWZpY2F0aW9ufX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiB0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDI+e3tnZXN0aW9ufX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJjcmVlckNsaWVudEZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByZW5vbVwiPlByw6lub20gOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJlbm9tXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJwcmVub21cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibm9tXCI+Tm9tIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5vbVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwibm9tXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBvdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibm9Db21wdGVcIj5ObyBDb21wdGUgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibm9Db21wdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cIm5vQ29tcHRlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvdXJyaWVsXCI+Q291cnJpZWwgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImNvdXJyaWVsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIm1vbkBjb3VycmllbC5jb21cIiBmb3JtQ29udHJvbE5hbWU9XCJjb3VycmllbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNlbGxcIj5DZWxsdWxhaXJlIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNlbGxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cImNlbGxcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29tcGFnbmllXCI+Q29tcGFnbmllIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvbXBhZ25pZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwiY29tcGFnbmllXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBvdXRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWRyZXNzZVwiPkFkcmVzc2UgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRyZXNzZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwiYWRyZXNzZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTIgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ2aWxsZVwiPlZpbGxlIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInZpbGxlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJ2aWxsZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvZGVQb3N0YWxcIj5Db2RlIFBvc3RhbCA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb2RlUG9zdGFsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJjb2RlUG9zdGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlbFByaW5jaXBhbFwiPlTDqWwuIFByaW5jaXBhbCA6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0ZWxQcmluY2lwYWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cInRlbFByaW5jaXBhbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTQgb3V0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb3ZpbmNlXCI+UHJvdmluY2UgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvdmluY2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cInByb3ZpbmNlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBheXNcIj5QYXlzIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBheXNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cInBheXNcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IG91dGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTIgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmYXhcIj5GYXggOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmF4XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJmYXhcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVsU2Vjb25kYWlyZVwiPlTDqWwuIFNlY29uZGFpcmUgOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGVsU2Vjb25kYWlyZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgZm9ybUNvbnRyb2xOYW1lPVwidGVsU2Vjb25kYWlyZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGRpdkZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBY3R1YWxpc2VyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBkaXZGb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCIhY3JlZXJDbGllbnRGb3JtLnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktZGlza1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW5yZWdpc3RyZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00IGRpdkZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wcmludFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29waWUgQ2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPiAgIFxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAub3V0ZXJ7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxJSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2Rm9vdGVye1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXJ7XHJcbiAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b257ICBcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sLW1kLTEye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJSAwIDIlIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjElO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWVyQ2xpZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGlkZW50aWZpY2F0aW9uOiBzdHJpbmcgPSBcIklkZW50aWZpY2F0aW9uXCI7XHJcbiAgICBnZXN0aW9uOiBzdHJpbmcgPSBcIkdlc3Rpb25cIjtcclxuICAgIGNyZWVyQ2xpZW50Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfY2xpZW50U2VydmljZTogQ2xpZW50U2VydmljZSwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyBcclxuICAgICAgICAgdGhpcy5jcmVlckNsaWVudEZvcm0gPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgICAgICAgIHByZW5vbTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbm9tOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBub0NvbXB0ZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgY291cnJpZWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuZXN0Q291cnJpZWxPS11dLFxyXG4gICAgICAgICAgICBjZWxsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjb21wYWduaWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGFkcmVzc2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIHZpbGxlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjb2RlUG9zdGFsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICB0ZWxQcmluY2lwYWw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIHByb3ZpbmNlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXlzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBmYXg6IFsnJ10sXHJcbiAgICAgICAgICAgIHRlbFNlY29uZGFpcmU6IFsnJ11cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgcHJpdmF0ZSBlc3RDb3VycmllbE9LKGNvbnRyb2w6IEZvcm1Db250cm9sKToge1tjaGFpbmU6IHN0cmluZ106IGJvb2xlYW59e1xyXG4gICAgICAgIGlmKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XCIpKVxyXG4gICAgICAgICAgICByZXR1cm4ge2NvdXJyaWVsSW52YWxpZGU6IHRydWV9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jcmVlckNsaWVudEZvcm0udmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQodGhpcy5jcmVlckNsaWVudEZvcm0udmFsdWUucHJlbm9tLCB0aGlzLmNyZWVyQ2xpZW50Rm9ybS52YWx1ZS5ub20sIHRoaXMuY3JlZXJDbGllbnRGb3JtLnZhbHVlLm5vQ29tcHRlLCBcclxuICAgICAgICAgICAgdGhpcy5jcmVlckNsaWVudEZvcm0udmFsdWUuY291cnJpZWwsIHRoaXMuY3JlZXJDbGllbnRGb3JtLnZhbHVlLmNvbXBhZ25pZSwgdGhpcy5jcmVlckNsaWVudEZvcm0udmFsdWUuYWRyZXNzZSwgdGhpcy5jcmVlckNsaWVudEZvcm0udmFsdWUudmlsbGUsXHJcbiAgICAgICAgICAgIHRoaXMuY3JlZXJDbGllbnRGb3JtLnZhbHVlLmNvZGVQb3N0YWwsIHRoaXMuY3JlZXJDbGllbnRGb3JtLnZhbHVlLmNlbGwsIHRoaXMuY3JlZXJDbGllbnRGb3JtLnZhbHVlLnRlbFByaW5jaXBhbCwgdGhpcy5jcmVlckNsaWVudEZvcm0udmFsdWUucHJvdmluY2UsXHJcbiAgICAgICAgICAgIHRoaXMuY3JlZXJDbGllbnRGb3JtLnZhbHVlLnBheXMsIHRoaXMuY3JlZXJDbGllbnRGb3JtLnZhbHVlLmZheCwgdGhpcy5jcmVlckNsaWVudEZvcm0udmFsdWUudGVsU2Vjb25kYWlyZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWVyIENsaWVudDogJyArIGNsaWVudC5wcmVub20gKyBcIiBcIiArIGNsaWVudC5ub20gKyBcIiBcIiArIGNsaWVudC5jb3VycmllbCk7XHJcbiAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS5jcmVlckNsaWVudChjbGllbnQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgZHUgc2VydmV1ciA6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xpZW50U2VydmljZS5jbGllbnRzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0NsaWVudCBzYXV2ZWdhcmRlcjogJyArIDxDbGllbnQ+KGRhdGEucHJlbm9tKSArIFwiIFwiICsgPENsaWVudD4oZGF0YS5ub20pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
