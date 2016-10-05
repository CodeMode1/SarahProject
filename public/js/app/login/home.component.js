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
            template: "\n        <div class=\"jumbotron col-md-12\">\n            <h2>{{title}}</h2>\n            <p><a class=\"btn btn-primary btn-lg\" role=\"button\" href=\"#down\">Nouvelles</a></p>\n        </div>\n        <section class=\"row col-md-12\">\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-calendar white\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-user white\" aria-hidden=\"true\"></span>\n            </div>\n            <div class=\"container col-md-4\">\n                <span class=\"glyphicon glyphicon-list-alt white\" aria-hidden=\"true\"></span>\n            </div>\n        </section>\n        <article id=\"down\" class=\"jumbotron col-md-12\">\n            <h3>{{nouvelles}}</h3>\n        </article>\n    ",
            styles: ["\n        *{\n            margin:0;\n        }\n\n        h2, h3{\n            padding: 2% 0 2% 0;\n        }\n\n        .jumbotron{\n            clear:both;\n            float:left;\n            width:100%;\n        }\n\n        .container{\n            margin:0;\n            text-align:center;\n            padding:2% 0 2% 0;\n            background-color: #A2B5CD;\n            width:100%;\n        }\n\n        .glyphicon{\n            font-size:2vw;\n        }\n\n        .white{\n            color:black;\n        }\n\n        .row{\n            padding:0;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUE4RGxEO0lBSUk7UUFIQSwyQkFBMkI7UUFDM0IsVUFBSyxHQUFXLDRDQUE0QyxDQUFDO1FBQzdELGNBQVMsR0FBVyxXQUFXLENBQUM7SUFDaEIsQ0FBQztJQUVqQixnQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQWpFbEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSx5MkJBbUJUO1lBQ0QsTUFBTSxFQUFFLENBQUMsc2tCQWtDUixDQUFDO1NBQ0wsQ0FBQzs7cUJBQUE7SUFRRixvQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFkscUJBQWEsZ0JBT3pCLENBQUEiLCJmaWxlIjoibG9naW4vaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb24gY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMj57e3RpdGxlfX08L2gyPlxyXG4gICAgICAgICAgICA8cD48YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiByb2xlPVwiYnV0dG9uXCIgaHJlZj1cIiNkb3duXCI+Tm91dmVsbGVzPC9hPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInJvdyBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyIHdoaXRlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXIgd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbGlzdC1hbHQgd2hpdGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8YXJ0aWNsZSBpZD1cImRvd25cIiBjbGFzcz1cImp1bWJvdHJvbiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgPGgzPnt7bm91dmVsbGVzfX08L2gzPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgKntcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiwgaDN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIlIDAgMiUgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5qdW1ib3Ryb257XHJcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MiUgMCAyJSAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTJCNUNEO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdseXBoaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOjJ2dztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53aGl0ZXtcclxuICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiM0YzRjNGM7XHJcbiAgICB0aXRsZTogc3RyaW5nID0gXCJTeXN0w6htZSBBYm9yZGFibGUgZGUgUsOpc2VydmF0aW9uIGV0IEFnZW5kYVwiO1xyXG4gICAgbm91dmVsbGVzOiBzdHJpbmcgPSBcIk5vdXZlbGxlc1wiO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
