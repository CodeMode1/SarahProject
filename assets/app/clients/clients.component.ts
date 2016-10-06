import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-clients',
    template: `
        <section>
            <div class="row">
                <router-outlet></router-outlet>
            </div>
        </section>
    `,
    styles: [`
        section{
            padding-left:2%;
        }
    `]
})
export class ClientsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}