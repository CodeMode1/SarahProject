import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-auth',
    template: `
         <div class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="router-link-active"><a [routerLink]="['signup']">Signup</a></li>
                    <li routerLinkActive="router-link-active"><a [routerLink]="['signin']">Signin</a></li>
                    <li routerLinkActive="router-link-active"><a [routerLink]="['logout']">Logout</a></li>
                </ul>
            </nav>
        </div>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .router-link-active{
            color:#555;
            cursor: pointer;
            background-color: #fff;
            border: #px solid #ddd;
            border-bottom-color: transparent;
        }

    `]
})
export class AuthComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}