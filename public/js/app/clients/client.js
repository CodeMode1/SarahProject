"use strict";
var Client = (function () {
    function Client(prenom, nom, noCompte, courriel, cell, compagnie, adresse, ville, codePostal, telPrincipal, province, pays, fax, telSecondaire, memo, memoAVenir, noExTaxeProv, noExTaxeFéd, selectStatut, selectSource, modifPar, modif, dateDernEv, creerPar, dateCree) {
        this.prenom = prenom;
        this.nom = nom;
        this.noCompte = noCompte;
        this.courriel = courriel;
        this.cell = cell;
        this.compagnie = compagnie;
        this.adresse = adresse;
        this.ville = ville;
        this.codePostal = codePostal;
        this.telPrincipal = telPrincipal;
        this.province = province;
        this.pays = pays;
        this.fax = fax;
        this.telSecondaire = telSecondaire;
        this.memo = memo;
        this.memoAVenir = memoAVenir;
        this.noExTaxeProv = noExTaxeProv;
        this.noExTaxeFéd = noExTaxeFéd;
        this.selectStatut = selectStatut;
        this.selectSource = selectSource;
        this.modifPar = modifPar;
        this.modif = modif;
        this.dateDernEv = dateDernEv;
        this.creerPar = creerPar;
        this.dateCree = dateCree;
    }
    return Client;
}());
exports.Client = Client;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMvY2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQTJCSSxnQkFBYSxNQUFjLEVBQUUsR0FBWSxFQUFFLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxJQUFhLEVBQUUsU0FBaUIsRUFBRSxPQUFnQixFQUFFLEtBQWEsRUFDN0ksVUFBbUIsRUFBRSxZQUFxQixFQUFFLFFBQWdCLEVBQUUsSUFBYSxFQUFFLEdBQVksRUFBRSxhQUFxQixFQUFFLElBQWEsRUFDL0gsVUFBbUIsRUFBRSxZQUFxQixFQUFFLFdBQW9CLEVBQUUsWUFBcUIsRUFBRSxZQUFxQixFQUFFLFFBQWlCLEVBQUUsS0FBWSxFQUMvSSxVQUFpQixFQUFFLFFBQWlCLEVBQUUsUUFBZTtRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXpEQSxBQXlEQyxJQUFBO0FBekRZLGNBQU0sU0F5RGxCLENBQUEiLCJmaWxlIjoiY2xpZW50cy9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2xpZW50e1xyXG4gICAgcHJlbm9tOiBzdHJpbmc7XHJcbiAgICBub206IHN0cmluZztcclxuICAgIG5vQ29tcHRlOiBzdHJpbmc7XHJcbiAgICBjb3VycmllbDogc3RyaW5nO1xyXG4gICAgY2VsbDogc3RyaW5nO1xyXG4gICAgY29tcGFnbmllOiBzdHJpbmc7IFxyXG4gICAgYWRyZXNzZTogc3RyaW5nO1xyXG4gICAgdmlsbGU6IHN0cmluZztcclxuICAgIGNvZGVQb3N0YWw6IHN0cmluZztcclxuICAgIHRlbFByaW5jaXBhbDogc3RyaW5nO1xyXG4gICAgcHJvdmluY2U6IHN0cmluZztcclxuICAgIHBheXM6IHN0cmluZztcclxuICAgIGZheDogc3RyaW5nO1xyXG4gICAgdGVsU2Vjb25kYWlyZTogc3RyaW5nO1xyXG4gICAgbWVtbzogc3RyaW5nO1xyXG4gICAgbWVtb0FWZW5pcjogU3RyaW5nO1xyXG4gICAgbm9FeFRheGVQcm92OiBzdHJpbmc7XHJcbiAgICBub0V4VGF4ZUbDqWQ6IHN0cmluZztcclxuICAgIHNlbGVjdFN0YXR1dDogc3RyaW5nO1xyXG4gICAgc2VsZWN0U291cmNlOiBzdHJpbmc7XHJcbiAgICBtb2RpZlBhcjogc3RyaW5nO1xyXG4gICAgbW9kaWY6IERhdGU7XHJcbiAgICBkYXRlRGVybkV2OiBEYXRlO1xyXG4gICAgY3JlZXJQYXI6IHN0cmluZztcclxuICAgIGRhdGVDcmVlOiBEYXRlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciggcHJlbm9tPzpzdHJpbmcsIG5vbT86IHN0cmluZywgbm9Db21wdGU/OiBzdHJpbmcsIGNvdXJyaWVsPzogc3RyaW5nLCBjZWxsPzogc3RyaW5nLCBjb21wYWduaWU/OnN0cmluZywgYWRyZXNzZT86IHN0cmluZywgdmlsbGU/OnN0cmluZyxcclxuICAgICAgICAgY29kZVBvc3RhbD86IHN0cmluZywgdGVsUHJpbmNpcGFsPzogc3RyaW5nLCBwcm92aW5jZT86c3RyaW5nLCBwYXlzPzogc3RyaW5nLCBmYXg/OiBzdHJpbmcsIHRlbFNlY29uZGFpcmU/OnN0cmluZywgbWVtbz86IHN0cmluZyxcclxuICAgICAgICAgbWVtb0FWZW5pcj86IHN0cmluZywgbm9FeFRheGVQcm92Pzogc3RyaW5nLCBub0V4VGF4ZUbDqWQ/OiBzdHJpbmcsIHNlbGVjdFN0YXR1dD86IHN0cmluZywgc2VsZWN0U291cmNlPzogc3RyaW5nLCBtb2RpZlBhcj86IHN0cmluZywgbW9kaWY/OiBEYXRlLCBcclxuICAgICAgICAgZGF0ZURlcm5Fdj86IERhdGUsIGNyZWVyUGFyPzogc3RyaW5nLCBkYXRlQ3JlZT86IERhdGUpe1xyXG4gICAgICAgIHRoaXMucHJlbm9tID0gcHJlbm9tO1xyXG4gICAgICAgIHRoaXMubm9tID0gbm9tO1xyXG4gICAgICAgIHRoaXMubm9Db21wdGUgPSBub0NvbXB0ZTtcclxuICAgICAgICB0aGlzLmNvdXJyaWVsID0gY291cnJpZWw7XHJcbiAgICAgICAgdGhpcy5jZWxsID0gY2VsbDtcclxuICAgICAgICB0aGlzLmNvbXBhZ25pZSA9IGNvbXBhZ25pZTtcclxuICAgICAgICB0aGlzLmFkcmVzc2UgPSBhZHJlc3NlO1xyXG4gICAgICAgIHRoaXMudmlsbGUgPSB2aWxsZTtcclxuICAgICAgICB0aGlzLmNvZGVQb3N0YWwgPSBjb2RlUG9zdGFsO1xyXG4gICAgICAgIHRoaXMudGVsUHJpbmNpcGFsID0gdGVsUHJpbmNpcGFsO1xyXG4gICAgICAgIHRoaXMucHJvdmluY2UgPSBwcm92aW5jZTtcclxuICAgICAgICB0aGlzLnBheXMgPSBwYXlzO1xyXG4gICAgICAgIHRoaXMuZmF4ID0gZmF4O1xyXG4gICAgICAgIHRoaXMudGVsU2Vjb25kYWlyZSA9IHRlbFNlY29uZGFpcmU7XHJcbiAgICAgICAgdGhpcy5tZW1vID0gbWVtbztcclxuICAgICAgICB0aGlzLm1lbW9BVmVuaXIgPSBtZW1vQVZlbmlyO1xyXG4gICAgICAgIHRoaXMubm9FeFRheGVQcm92ID0gbm9FeFRheGVQcm92O1xyXG4gICAgICAgIHRoaXMubm9FeFRheGVGw6lkID0gbm9FeFRheGVGw6lkO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0U3RhdHV0ID0gc2VsZWN0U3RhdHV0O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0U291cmNlID0gc2VsZWN0U291cmNlO1xyXG4gICAgICAgIHRoaXMubW9kaWZQYXIgPSBtb2RpZlBhcjtcclxuICAgICAgICB0aGlzLm1vZGlmID0gbW9kaWY7XHJcbiAgICAgICAgdGhpcy5kYXRlRGVybkV2ID0gZGF0ZURlcm5FdjtcclxuICAgICAgICB0aGlzLmNyZWVyUGFyID0gY3JlZXJQYXI7XHJcbiAgICAgICAgdGhpcy5kYXRlQ3JlZSA9IGRhdGVDcmVlOyAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
