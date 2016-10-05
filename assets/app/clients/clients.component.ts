import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-clients',
    template: `
        <section>
            <div class="row">
                in clients
                <router-outlet></router-outlet>
            </div>
        </section>
    `,
    styles: [`
        section{
            padding-left:5%;
        }
    `]
})
export class ClientsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}