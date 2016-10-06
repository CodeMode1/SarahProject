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
        //background-color:#4c4c4c;
        this.title = "Système Abordable de Réservation et Agenda";
        this.nouvelles = "Nouvelles";
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-home',
            template: "\n        <div class=\"jumbotron col-md-12\">\n            <h2>{{title}}</h2>\n            <p><a class=\"btn btn-primary btn-lg\" role=\"button\" href=\"#nouvelles\">Nouvelles</a></p>\n        </div>\n        <section class=\"row col-md-12\">\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-calendar white\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-user white\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-list-alt white\" aria-hidden=\"true\"></span>\n            </div>\n        </section>\n        <article id=\"nouvelles\" class=\"jumbotron col-md-12\">\n            <h3>{{nouvelles}}</h3>\n        </article>\n    ",
            styles: ["\n        *{\n            margin:0;\n        }\n\n        h2, h3{\n            padding: 2% 0 2% 0;\n        }\n\n        .jumbotron{\n            clear:both;\n            float:left;\n            width:100%;\n        }\n\n        .container{\n            margin:0;\n            text-align:center;\n            padding:2% 0 2% 0;\n            background-color: #A2B5CD;\n            width:100%;\n        }\n\n        .glyphicon{\n            font-size:2vw;\n        }\n\n        .white{\n            color:black;\n        }\n\n        .row{\n            padding:0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUE4RGxEO0lBSUk7UUFIQSwyQkFBMkI7UUFDM0IsVUFBSyxHQUFXLDRDQUE0QyxDQUFDO1FBQzdELGNBQVMsR0FBVyxXQUFXLENBQUM7SUFDaEIsQ0FBQztJQUVqQixnQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQWpFbEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxtM0JBbUJUO1lBQ0QsTUFBTSxFQUFFLENBQUMsc2tCQWtDUixDQUFDO1NBQ0wsQ0FBQzs7cUJBQUE7SUFRRixvQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFkscUJBQWEsZ0JBT3pCLENBQUEiLCJmaWxlIjoibG9naW4vaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb24gY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMj57e3RpdGxlfX08L2gyPlxyXG4gICAgICAgICAgICA8cD48YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiByb2xlPVwiYnV0dG9uXCIgaHJlZj1cIiNub3V2ZWxsZXNcIj5Ob3V2ZWxsZXM8L2E+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicm93IGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXIgd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdXNlciB3aGl0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdCB3aGl0ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxhcnRpY2xlIGlkPVwibm91dmVsbGVzXCIgY2xhc3M9XCJqdW1ib3Ryb24gY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMz57e25vdXZlbGxlc319PC9oMz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgICp7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIsIGgze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJSAwIDIlIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuanVtYm90cm9ue1xyXG4gICAgICAgICAgICBjbGVhcjpib3RoO1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjIlIDAgMiUgMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0EyQjVDRDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5nbHlwaGljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToydnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2hpdGV7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjojNGM0YzRjO1xyXG4gICAgdGl0bGU6IHN0cmluZyA9IFwiU3lzdMOobWUgQWJvcmRhYmxlIGRlIFLDqXNlcnZhdGlvbiBldCBBZ2VuZGFcIjtcclxuICAgIG5vdXZlbGxlczogc3RyaW5nID0gXCJOb3V2ZWxsZXNcIjtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
