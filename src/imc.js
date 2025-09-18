export default class Imc {

    constructor(nomImc, poidsImc, tailleImc){
        this.nom = nomImc;
        this.poids = poidsImc;
        this.taille = tailleImc;
    }

    calculImc() {
        let imc = this.poids / (this.taille * this.taille);
        return imc;
    }

    display(){
        
        return `${this.nom} (${this.poids},${this.taille},a un IMC de: ${this.calculImc()})`
    }
}

