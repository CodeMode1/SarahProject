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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Système Abordable de Réservation et Agenda";
        this.nouvelles = "Nouvelles";
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: " \n        <my-header></my-header>\n        <div class=\"jumbotron col-md-12\">\n            <h2>{{title}}</h2>\n            <p><a class=\"btn btn-primary btn-lg\" href=\"#down\" role=\"button\">Nouvelles</a></p>\n        </div>\n        <div class=\"row col-md-12\">\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-calendar white\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-user white\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-list-alt white\" aria-hidden=\"true\"></span>\n            </div>\n        </div>\n        <article id=\"down\" class=\"jumbotron col-md-12\">\n            <h3>{{nouvelles}}</h3>\n        </article>\n\n\n    ",
            styles: ["\n\n        *{\n            margin:0;\n        }\n\n        h2, h3{\n            padding: 2% 0 2% 0;\n        }\n\n        .jumbotron{\n            clear:both;\n            float:left;\n            width:100%;\n        }\n\n        .container{\n            margin:0;\n            text-align:center;\n            padding:2% 0 2% 0;\n            background-color:#4c4c4c;\n            width:100%;\n        }\n\n        .glyphicon{\n            font-size:2vw;\n        }\n\n        .white{\n            color:white;\n        }\n\n        .row{\n            padding:0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQWlFMUM7SUFBQTtRQUNJLFVBQUssR0FBVyw0Q0FBNEMsQ0FBQztRQUM3RCxjQUFTLEdBQVcsV0FBVyxDQUFDO0lBR3BDLENBQUM7SUFwRUQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSx1NEJBc0JUO1lBQ0QsTUFBTSxFQUFDLENBQUMsdWtCQW1DUCxDQUFDO1NBQ0wsQ0FBQzs7b0JBQUE7SUFNRixtQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksb0JBQVksZUFLeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgICA8bXktaGVhZGVyPjwvbXktaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGgyPnt7dGl0bGV9fTwvaDI+XG4gICAgICAgICAgICA8cD48YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBocmVmPVwiI2Rvd25cIiByb2xlPVwiYnV0dG9uXCI+Tm91dmVsbGVzPC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyIHdoaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXIgd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQgd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhcnRpY2xlIGlkPVwiZG93blwiIGNsYXNzPVwianVtYm90cm9uIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGgzPnt7bm91dmVsbGVzfX08L2gzPlxuICAgICAgICA8L2FydGljbGU+XG5cblxuICAgIGAsXG4gICAgc3R5bGVzOltgXG5cbiAgICAgICAgKntcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIsIGgze1xuICAgICAgICAgICAgcGFkZGluZzogMiUgMCAyJSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmp1bWJvdHJvbntcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXJ7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzoyJSAwIDIlIDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0YzRjNGM7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdseXBoaWNvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZToydnc7XG4gICAgICAgIH1cblxuICAgICAgICAud2hpdGV7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3d7XG4gICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIHRpdGxlOiBzdHJpbmcgPSBcIlN5c3TDqG1lIEFib3JkYWJsZSBkZSBSw6lzZXJ2YXRpb24gZXQgQWdlbmRhXCI7XG4gICAgbm91dmVsbGVzOiBzdHJpbmcgPSBcIk5vdXZlbGxlc1wiO1xuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
