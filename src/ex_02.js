class Habitation {
   //Constructeur
   constructor(nom_maison, largeur_maison, longueur_maison, nbrEtage_maison) {
      this.nom = nom_maison;
      this.largeur = largeur_maison;
      this.longueur =longueur_maison;
      this.nbrEtage = nbrEtage_maison;
   }
   //Méthode
   superficie() {
      return this.largeur * this.longueur * this. nbrEtage;
   }
}

const villa = new Habitation("villa", 15, 8, 3);
const maison = new Habitation("maison", 20, 12, 5);
const immeuble = new Habitation("immeuble", 50, 30, 8);

console.log(villa.superficie());
console.log(maison.superficie());
console.log(immeuble.superficie());

console.log(`habitation :${immeuble.nom}, à une superficie de : ${immeuble.superficie()} m²`);