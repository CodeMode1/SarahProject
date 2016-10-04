import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-login',
    template: `
    <ul class="nav nav-tabs nav-justified">
      <li role="presentation"><a [routerLink]="['']">Home</a></li>
      <li role="presentation"><a [routerLink]="['/auth']" routerLinkActive="active">Login</a></li>
    </ul>
    `,
    styles:[`
     .active {
         background-color: #337ab7;
         color: white;
        }
    `]
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}