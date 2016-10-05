import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <div class="col-md-12">
                <my-logo></my-logo>
            </div>
            <nav class="col-md-12">
                <ul class="nav nav-pills">
                    <li *ngIf="estLogIn()"><a>Agenda</a></li>
                    <li *ngIf="estLogIn()"><a>Clients</a></li>
                    <li *ngIf="estLogIn()"><a>Évènements</a></li>
                    <li *ngIf="estLogIn()"><a>Ressources</a></li>
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
            position:relative;
        }

        .row{
            margin-left:0;
            margin-right:0;
        }

        nav{
            background-color: white;
            padding:1% 0 1% 0;
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

        .my-login{
            position:absolute;
            bottom:0;
        }
    `]
})
export class HeaderComponent implements OnInit {
    title: string = "Système abordable de réservation et agenda";

    constructor(private _authService: AuthService){

    }

    ngOnInit(){
    }

    estLogIn(){
        return this._authService.estLogIn();
    }
}