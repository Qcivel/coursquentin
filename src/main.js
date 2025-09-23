import CompteBancaire from "./compteBancaire.js";

const newCompte = document.querySelector("#nom");
const buttonCompte = document.querySelector("#create");
const compte = document.querySelector("#compte");
const montant = document.querySelector("#montant");
const buttonCrediter = document.querySelector("#crediter");
const buttonRetirer = document.querySelector("#retirer");
const para = document.querySelector("#message");
const cible = document.querySelector("#cible");
const source = document.querySelector("#source");
const montant_virement = document.querySelector("#montant_virement");
const buttonVirement = document.querySelector("#virement");

const lesComptes = [];


buttonCompte.addEventListener("click", function (){
  console.log("test_boutton");
  lesComptes.push(new CompteBancaire(newCompte.value,0));
  
  console.log(lesComptes);

});

buttonCrediter.addEventListener("click", function(){
  console.log("test crediter");
  // let valeur = compte.value;
  // valeur.crediter(montant.value);
  // console.log(lesComptes);
  for (const leCompte of lesComptes){
    if (leCompte.nom == compte.value){
      leCompte.crediter(parseInt(montant.value)); // parseInt trnasoforme la chaine de caractère en nombre
    } else {
      console.log("le compte n'existe pas");
    }
  }
  console.log(lesComptes);
});
buttonRetirer.addEventListener("click", function(){
  console.log("test retirer");
  

});