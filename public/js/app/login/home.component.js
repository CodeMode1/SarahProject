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
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = "Système Abordable de Réservation et Agenda";
        this.nouvelles = "Nouvelles";
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-home',
            template: "\n        <div class=\"jumbotron col-md-12\">\n            <h2>{{title}}</h2>\n            <p><a class=\"btn btn-primary btn-lg\" role=\"button\" href=\"#down\">Nouvelles</a></p>\n        </div>\n        <section class=\"row col-md-12\">\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-calendar white\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-user white\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-list-alt white\" aria-hidden=\"true\"></span>\n            </div>\n        </section>\n        <article id=\"down\" class=\"jumbotron col-md-12\">\n            <h3>{{nouvelles}}</h3>\n        </article>\n    ",
            styles: ["\n        *{\n            margin:0;\n        }\n\n        h2, h3{\n            padding: 2% 0 2% 0;\n        }\n\n        .jumbotron{\n            clear:both;\n            float:left;\n            width:100%;\n        }\n\n        .container{\n            margin:0;\n            text-align:center;\n            padding:2% 0 2% 0;\n            background-color:#4c4c4c;\n            width:100%;\n        }\n\n        .glyphicon{\n            font-size:2vw;\n        }\n\n        .white{\n            color:white;\n        }\n\n        .row{\n            padding:0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUE4RGxEO0lBR0k7UUFGQSxVQUFLLEdBQVcsNENBQTRDLENBQUM7UUFDN0QsY0FBUyxHQUFXLFdBQVcsQ0FBQztJQUNoQixDQUFDO0lBRWpCLGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBaEVsQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLHkyQkFtQlQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxxa0JBa0NSLENBQUM7U0FDTCxDQUFDOztxQkFBQTtJQU9GLG9CQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxxQkFBYSxnQkFNekIsQ0FBQSIsImZpbGUiOiJsb2dpbi9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1ob21lJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvbiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgPGgyPnt7dGl0bGV9fTwvaDI+XHJcbiAgICAgICAgICAgIDxwPjxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiIHJvbGU9XCJidXR0b25cIiBocmVmPVwiI2Rvd25cIj5Ob3V2ZWxsZXM8L2E+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicm93IGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXIgd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdXNlciB3aGl0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdCB3aGl0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxhcnRpY2xlIGlkPVwiZG93blwiIGNsYXNzPVwianVtYm90cm9uIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICA8aDM+e3tub3V2ZWxsZXN9fTwvaDM+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAqe1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyLCBoM3tcclxuICAgICAgICAgICAgcGFkZGluZzogMiUgMCAyJSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmp1bWJvdHJvbntcclxuICAgICAgICAgICAgY2xlYXI6Ym90aDtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzoyJSAwIDIlIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzRjNGM0YztcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5nbHlwaGljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToydnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2hpdGV7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHRpdGxlOiBzdHJpbmcgPSBcIlN5c3TDqG1lIEFib3JkYWJsZSBkZSBSw6lzZXJ2YXRpb24gZXQgQWdlbmRhXCI7XHJcbiAgICBub3V2ZWxsZXM6IHN0cmluZyA9IFwiTm91dmVsbGVzXCI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
