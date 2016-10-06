import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Client } from './client';
import { ErrorService } from '../errors/error.service';

@Component({
    moduleId: module.id,
    selector: 'my-creer-client',
    template:`
    <section class="col-md-12">
        <div class="col-md-4 title">
            <h2>{{identification}}</h2>
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-md-6 title">
            <h2>{{gestion}}</h2>
        </div>
    </section>
    <section>
        <form [formGroup]="creerClientForm" (ngSubmit)="onSubmit()">
            <div class="col-md-4 outer">
                <div class="col-md-2 form-group">
                    <label for="prenom">Prénom : </label>
                    <input type="text" id="prenom" class="form-control" formControlName="prenom">
                </div>
                <div class="col-md-2 form-group">
                    <label for="nom">Nom : </label>
                    <input type="text" id="nom" class="form-control" formControlName="nom">
                </div>
            </div>
            <div class="col-md-4 outer">
                <div class="col-md-2 form-group">
                    <label for="noCompte">No Compte : </label>
                    <input type="text" id="noCompte" class="form-control" formControlName="noCompte">
                </div>
                <div class="col-md-2 form-group">
                    <label for="courriel">Courriel : </label>
                    <input type="email" id="courriel" class="form-control" placeholder="mon@courriel.com" formControlName="courriel">
                </div>
            </div>
            <div class="col-md-4 outer">
                <div class="col-md-2 form-group">
                    <label for="cell">Cellulaire : </label>
                    <input type="text" id="cell" class="form-control" formControlName="cell">
                </div>
                <div class="col-md-2 form-group">
                    <label for="compagnie">Compagnie : </label>
                    <input type="text" id="compagnie" class="form-control" formControlName="compagnie">
                </div>
            </div>
            <div class="col-md-4 outer">
                <div class="col-md-2 form-group">
                    <label for="adresse">Adresse : </label>
                    <input type="text" id="adresse" class="form-control" formControlName="adresse">
                </div>
                <div class="col-md-2 form-group">
                    <label for="ville">Ville : </label>
                    <input type="text" id="ville" class="form-control" formControlName="ville">
                </div>
            </div>
            <div class="col-md-4 outer">
                <div class="col-md-2 form-group">
                    <label for="codePostal">Code Postal : </label>
                    <input type="text" id="codePostal" class="form-control" formControlName="codePostal">
                </div>
                <div class="col-md-2 form-group">
                    <label for="telPrincipal">Tél. Principal : </label>
                    <input type="text" id="telPrincipal" class="form-control" formControlName="telPrincipal">
                </div>
            </div>
            <div class="col-md-4 outer">
                <div class="col-md-2 form-group">
                    <label for="province">Province : </label>
                    <input type="text" id="province" class="form-control" formControlName="province">
                </div>
                <div class="col-md-2 form-group">
                    <label for="pays">Pays : </label>
                    <input type="text" id="pays" class="form-control" formControlName="pays">
                </div>
            </div>
            <div class="col-md-4 outer">
                <div class="col-md-2 form-group">
                    <label for="fax">Fax : </label>
                    <input type="text" id="fax" class="form-control" formControlName="fax">
                </div>
                <div class="col-md-2 form-group">
                    <label for="telSecondaire">Tél. Secondaire : </label>
                    <input type="text" id="telSecondaire" class="form-control" formControlName="telSecondaire">
                </div>
            </div>
            <div class="col-md-12 footer">
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
            width:50%;
        }

        divFooter{
            text-align:center;
        }

        .footer{
             border-top: 2px solid black;
        }

        button{  
            display:block;
            margin: 0 auto;
        }

        .col-md-12{
            padding: 2% 0 2% 0;
        }

        h2{
            padding-top:1%;
            padding-bottom:1%;
        }

        .title{
            text-align:left;
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
            telSecondaire: ['']
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
