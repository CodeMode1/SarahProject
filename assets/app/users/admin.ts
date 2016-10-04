export class Admin{
    password:string;
    courriel:string;
    prenom: string;
    nom: string;


    constructor(password: string, courriel:string, prenom?: string, nom?: string){
        this.password = password;
        this.courriel = courriel;
        this.prenom = prenom;
        this.nom = nom;
    }
    
}