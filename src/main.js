import CompteBancaire from "./compteBancaire.js";


const compteAlex = new CompteBancaire("Alex",1000);
const compteClovis = new CompteBancaire("Clovis",1000);
const compteMarco = new CompteBancaire("Marco",1000);

let list = [
    new CompteBancaire("Alex",1000),
    new CompteBancaire("Clovis",1000),
    new CompteBancaire("Marco",1000),
];

try {
list[0].retrait(100);
} catch(error){
    console.log(error.message);
}
try {
    list[2].virement(300,list[1]);
} catch (error){
    console.log(error.message);
}

try {
    list[0].retrait(1200);
} catch(error){
    console.log(error.message);
}

console.log(`titulaire: ${list[0].nom}, solde: ${list[0].solde}`);
console.log(`titulaire: ${list[1].nom}, solde: ${list[1].solde}`);
console.log(`titulaire: ${list[2].nom}, solde: ${list[2].solde}`);