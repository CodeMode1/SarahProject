import { Component } from "@angular/core";

@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <div class="col-md-12">
                <my-logo></my-logo>
            </div>
            <nav class="col-md-12">
                <ul class="nav nav-pills">
                    <li><a>Agenda</a></li>
                    <li><a>Clients</a></li>
                    <li><a>Évènements</a></li>
                    <li><a>Ressources</a></li>
                </ul>
            </nav>
        </header>
    `,
    styles: [`
        header {
            width: auto;
            height: auto;
            margin-top: 0px;
            background-color: #A2B5CD;
            padding: 0 0 8% 0;
        }

        nav{
            background-color: white;
            padding:1%;
            clear:both;
            float:left;
            width:100%;
        }

        div{
            float:left;
            margin:0;
            padding:0;
            background-color: #d7e1ee;
        }

        ul{
          text-align: left;  
        }

        li {
            float: none;
            display: inline-block;
            padding: 0 3% 0 0;
        }

        li a{
            font-size:1.5vw;
        }

        li:nth-of-type(1){
            padding: 0 3% 0 5%;
        }
        
        .router-link-active {
            background-color: #337ab7;
            color: white;
        }
    `]
})
export class HeaderComponent {
    title: string = "Système abordable de réservation et agenda";
}