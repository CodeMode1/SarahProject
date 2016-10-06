export class Client{
    prenom: string;
    nom: string;
    noCompte: string;
    courriel: string;
    compagnie: string; 
    adresse: string;
    ville: string;
    codePostal: string;
    cell: string;
    telPrincipal: string;
    province: string;
    pays: string;
    fax: string;
    telSecondaire: string;
    creerPar: string;
    dateCree: Date;
    
    constructor( prenom:string, nom: string, noCompte: string, courriel: string, compagnie:string, adresse: string, ville:string,
         codePostal: string, cell: string, telPrincipal: string, province:string, pays: string, fax?: string, telSecondaire?:string,
         creerPar?:string, dateCree?:Date){
        this.prenom = prenom;
        this.nom = nom;
        this.noCompte = noCompte;
        this.courriel = courriel;
        this.compagnie = compagnie;
        this.adresse = adresse;
        this.ville = ville;
        this.codePostal = codePostal;
        this.cell = cell;
        this.telPrincipal = telPrincipal;
        this.province = province;
        this.pays = pays;
        this.fax = fax;
        this.telSecondaire = telSecondaire;
        this.creerPar = creerPar;
        this.dateCree = dateCree;
    }
}