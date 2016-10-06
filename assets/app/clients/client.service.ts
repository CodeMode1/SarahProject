import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Client } from './client';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {
    clients: Client[] = [];

    constructor(private _http: Http) { }

    creerClient(client: Client){
        const body = JSON.stringify(client);
        const header = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/client' + token, body, {headers: header})
            .map((response: Response) => {
                const data = response.json().obj;
                let client = new Client(data.prenom, data.nom, data.noCompte, data.courriel, data.compagnie,
                data.adresse, data.ville, data.codePostal, data.cell, data.telPrincipal, data.province, 
                data.pays, data.fax, data.telSecondaire, data.creerPar);
                return client;
            })
            .catch(error => Observable.throw(error.json() || 'server error'));
    }
}
