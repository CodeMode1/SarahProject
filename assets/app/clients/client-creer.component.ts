import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from './client';
import { ErrorService } from '../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'my-creer-client',
    template:`
    <section class="col-md-12 space">
        <form [formGroup]="creerClientForm" (ngSubmit)="onSubmit()">
        <section class="col-md-6">
                <div class="col-md-12 title">
                    <h2>{{identification}}</h2>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="prenom">Prénom</label>
                        <input type="text" id="prenom" class="form-control" formControlName="prenom" placeholder="firstname">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="nom">Nom</label>
                        <input type="text" id="nom" class="form-control" formControlName="nom" placeholder="name">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="noCompte">No Compte</label>
                        <input type="text" id="noCompte" class="form-control" formControlName="noCompte" placeholder="account #">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="courriel">Courriel</label>
                        <input type="email" id="courriel" class="form-control" placeholder="my@email.com" formControlName="courriel">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="cell">Cellulaire</label>
                        <input type="text" id="cell" class="form-control" formControlName="cell" placeholder="cell #">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="compagnie">Compagnie</label>
                        <input type="text" id="compagnie" class="form-control" formControlName="compagnie" placeholder="business">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="adresse">Adresse</label>
                        <input type="text" id="adresse" class="form-control" formControlName="adresse" placeholder="adress">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="ville">Ville</label>
                        <input type="text" id="ville" class="form-control" formControlName="ville" placeholder="city">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="codePostal">Code Postal</label>
                        <input type="text" id="codePostal" class="form-control" formControlName="codePostal" placeholder="postal code">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="telPrincipal">Tél. Principal</label>
                        <input type="text" id="telPrincipal" class="form-control" formControlName="telPrincipal" placeholder="main #">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="province">Province</label>
                        <input type="text" id="province" class="form-control" formControlName="province" placeholder="province">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="pays">Pays</label>
                        <input type="text" id="pays" class="form-control" formControlName="pays" placeholder="country">
                    </div>
                </div>
                <div class="col-md-12 outer">
                    <div class="col-md-6 form-group">
                        <label for="fax">Fax</label>
                        <input type="text" id="fax" class="form-control" formControlName="fax" placeholder="fax #">
                    </div>
                    <div class="col-md-6 form-group">
                        <label for="telSecondaire">Tél. Secondaire</label>
                        <input type="text" id="telSecondaire" class="form-control" formControlName="telSecondaire" placeholder="second #">
                    </div>
                </div>
            </section>
            <section class="col-md-2">
            </section>
            <section class="col-md-4">
                <div class="col-md-12 title">
                    <h2>{{gestion}}</h2>
                </div>
                <div class="col-md-6 outer">
                    <div class="col-md-12 memo">
                        <label for="labelMemo">Mémo</label>
                        <textarea id="labelMemo" class="form-control" rows="10"></textarea>
                    </div>
                    <div class="col-md-12 memo">
                        <label for="labelMess">Message important pour évènement à venir</label>
                        <textarea id="labelMess" class="form-control" rows="10"></textarea>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="col-md-12 gestionInputs">
                        <label for="noExTaxeProv">No exemption taxe provinciale</label>
                        <input type="text" id="noExTaxeProv" class="form-control" formControlName="noExTaxeProv">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="noExTaxeFéd">No exemption taxe fédérale</label>
                        <input type="text" id="noExTaxeFéd" class="form-control" formControlName="noExTaxeFéd">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="modifPar">Modifié par</label>
                        <input type="text" id="modifPar" class="form-control" formControlName="modifPar">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="modif">Modifié</label>
                        <input type="text" id="modif" class="form-control" formControlName="modif">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="creePar">Créé par</label>
                        <input type="text" id="creePar" class="form-control" formControlName="creePar">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="cree">Créé</label>
                        <input type="text" id="cree" class="form-control" formControlName="cree">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="dateDernEv">Date Dernier Évènement</label>
                        <input type="text" id="dateDernEv" class="form-control" formControlName="dateDernEv">
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="selectStatut">Satut du client</label>
                        <select class="form-control" id="selectStatut" formControlName="selectStatut">
                            <option>Client passé</option>
                            <option>Client actuel</option>
                            <option>Client récurrent</option>
                            <option>Client à solliciter</option>
                            <option>Client sollicité</option>
                            <option>Client VIP</option>
                        </select>
                    </div>
                    <div class="col-md-12 gestionInputs">
                        <label for="selectSource">Satut du client</label>
                        <select class="form-control" id="selectSource" formControlName="selectSource">
                            <option>Internet</option>
                            <option>Bouche-à-oreille</option>
                            <option>Journaux et Magazines</option>
                            <option>Télévision</option>
                            <option>Travail</option>
                            <option>Autres</option>
                        </select>
                    </div>     
                </div>
            </section>
            <div class="col-md-12 footer space">
                <div class="col-md-4 divFooter">
                    <button type="button" class="btn btn-primary">
                        <span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                        Actualiser
                    </button>
                </div>
                <div class="col-md-4 divFooter">
                    <button type="submit" class="btn btn-primary" [disabled]="!creerClientForm.valid">
                        <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                        Enregistrer
                    </button>
                </div>
                <div class="col-md-4 divFooter">
                    <button type="button" class="btn btn-primary">
                        <span class="glyphicon glyphicon-print" aria-hidden="true"></span>
                        Copie Client
                    </button>
                </div>
            </div>
        </form>
    </section>

    `,
    styles: [`
        .outer{
            float:left;
            clear:both;
            padding: 0 0 1% 0;
        }
        
        .form-group{
            float:left;
        }

        .divFooter{
            text-align:center;
        }

        .footer{
            border-top: 2px solid black;
        }

        button{  
            display:block;
            margin: 0 auto;
        }

        .space {
            padding: 2%;
        }

        h2{
            padding-top:1%;
            padding-bottom:2%;
        }

        .title{
            text-align:left;
        }

        .memo{
            float: left;
            clear: both;
            padding: 0 0 2% 0;
        }

        textarea{
            resize: none;
        }

        .gestionInputs{
            float: left;
            clear: both;
        }

        .dropdown{
            padding:0;
        }


        


    `
    ]
})
export class CreerClientComponent implements OnInit {
    identification: string = "Identification";
    gestion: string = "Gestion";
    creerClientForm: FormGroup;

    constructor(private _formBuilder: FormBuilder, private _clientService: ClientService, private _errorService: ErrorService) { }

    ngOnInit() { 
         this.creerClientForm = this._formBuilder.group({
            prenom: ['', Validators.required],
            nom: ['', Validators.required],
            noCompte: ['', Validators.required],
            courriel: ['', [Validators.required, this.estCourrielOK]],
            cell: ['', Validators.required],
            compagnie: ['', Validators.required],
            adresse: ['', Validators.required],
            ville: ['', Validators.required],
            codePostal: ['', Validators.required],
            telPrincipal: ['', Validators.required],
            province: ['', Validators.required],
            pays: ['', Validators.required],
            fax: [''],
            telSecondaire: [''],
            noExTaxeProv: [''],
            noExTaxeFéd: [''],
            modifPar: [''],
            modif: [''],
            creePar: [''],
            cree: [''],
            dateDernEv: [''],
            selectStatut: [''],
            selectSource: ['']
        });

    }

     private estCourrielOK(control: FormControl): {[chaine: string]: boolean}{
        if(!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"))
            return {courrielInvalide: true};
    }

    onSubmit(){
        console.log(this.creerClientForm.value);
        const client = new Client(this.creerClientForm.value.prenom, this.creerClientForm.value.nom, this.creerClientForm.value.noCompte, 
            this.creerClientForm.value.courriel, this.creerClientForm.value.compagnie, this.creerClientForm.value.adresse, this.creerClientForm.value.ville,
            this.creerClientForm.value.codePostal, this.creerClientForm.value.cell, this.creerClientForm.value.telPrincipal, this.creerClientForm.value.province,
            this.creerClientForm.value.pays, this.creerClientForm.value.fax, this.creerClientForm.value.telSecondaire);
        console.log('creer Client: ' + client.prenom + " " + client.nom + " " + client.courriel);
        this._clientService.creerClient(client)
            .subscribe(
                data => { 
                    console.log('data du serveur :');
                    console.log(data);
                    this._clientService.clients.push(data);
                    alert('Client sauvegarder: ' + <Client>(data.prenom) + " " + <Client>(data.nom));
            },
                error => this._errorService.handleError(error)
            );
    }
}
