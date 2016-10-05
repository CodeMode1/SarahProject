export class Client{
    noCompte: string;
    courriel: string;
    clientId: string;
    compagnie: string;
    nom: string;
    prenom: string;
    adresse: string;
    ville: string;
    codePostal: string;
    tel: string;
    fax: string;
    cell: string;
    adminNom: string;
    adminId: string;
    dateModif: Date;
    
    constructor(noCompte: string, courriel: string, clientId?: string, compagnie?:string, nom?: string, prenom?:string, adresse?: string, ville?:string,
         codePostal?: string, tel?: string, fax?: string, cell?: string, adminNom?:string, adminId?: string, dateModif?: Date){
        this.noCompte = noCompte;
        this.courriel = courriel;
        this.clientId = clientId;
        this.compagnie = compagnie;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.ville = ville;
        this.codePostal = codePostal;
        this.tel = tel;
        this.fax = fax;
        this.cell = cell;
        this.dateModif = dateModif;
    }
}