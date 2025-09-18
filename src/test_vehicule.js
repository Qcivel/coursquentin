import Vehicule  from './vehicule.js';

const voiture = new Vehicule("Mercedes CLK", 4, 250);
const moto = new Vehicule("Honda CBR", 2, 230);


voiture.boost();



console.log(moto.detect(),moto.vitesse);
console.log(voiture.detect(),voiture.vitesse);

console.log(voiture.plusRapide(voiture,moto));