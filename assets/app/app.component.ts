import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: ` 
        <my-header></my-header>
        <div class="jumbotron col-md-12">
            <h2>{{title}}</h2>
            <p><a class="btn btn-primary btn-lg" href="#down" role="button">Nouvelles</a></p>
        </div>
        <div class="row col-md-12">
            <div class="container col-md-4">
                <span class="glyphicon glyphicon-calendar white" aria-hidden="true"></span>
            </div>
            <div class="container col-md-4">
                <span class="glyphicon glyphicon-user white" aria-hidden="true"></span>
            </div>
            <div class="container col-md-4">
                <span class="glyphicon glyphicon-list-alt white" aria-hidden="true"></span>
            </div>
        </div>
        <article id="down" class="jumbotron col-md-12">
            <h3>{{nouvelles}}</h3>
        </article>


    `,
    styles:[`

        *{
            margin:0;
        }

        h2, h3{
            padding: 2% 0 2% 0;
        }

        .jumbotron{
            clear:both;
            float:left;
            width:100%;
        }

        .container{
            margin:0;
            text-align:center;
            padding:2% 0 2% 0;
            background-color:#4c4c4c;
            width:100%;
        }

        .glyphicon{
            font-size:2vw;
        }

        .white{
            color:white;
        }

        .row{
            padding:0;
        }
    `]
})
export class AppComponent {
    title: string = "Système Abordable de Réservation et Agenda";
    nouvelles: string = "Nouvelles";


}