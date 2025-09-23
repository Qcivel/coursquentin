


export default class CompteBancaire {

    constructor(nomCompte, soldeCompte){
        this.nom = nomCompte;
        this.solde = soldeCompte;
    }

    retrait (value) {
        if (this.solde < value){
            throw new Error (`${this.nom},retrait de: ${value} refusé avec solde de: ${this.solde}`);
        } else if (this.solde <= 0){
            throw new Error (`Solde de: ${this.nom} est de ${this.solde} retrait refusé !`);
        } else {
            this.solde -= value ;
            console.log(`Retrait de: ${value} pour: ${this.nom}`);
        }        
    }

    ajout (value) {
        if (value < 0){
            throw new Error("Le montant est négatif");
        }
        this.solde += value;
        console.log(`Ajout de: ${value} pour: ${this.nom}`)
    }

    virement(valeur,compte1){
        this.retrait(valeur);
        compte1.ajout(valeur);
        console.log(`Virement de: ${valeur} de ${this.nom} vers: ${compte1.nom}`);
    }
}


