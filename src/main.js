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
  
  for (const leCompte of lesComptes){
    if (leCompte.nom == compte.value){
      leCompte.crediter(parseInt(montant.value)); // parseInt transforme la chaine de caractère en nombre
    } else {
      console.log("le compte n'existe pas");
    }
  }
  console.log(lesComptes);
});

buttonRetirer.addEventListener("click", function(){
  console.log("test retirer");
  for (const leCompte of lesComptes){
    if (leCompte.nom == compte.value){
      leCompte.retrait(parseInt(montant.value)); // parseInt transforme la chaine de caractère en nombre
    } else {
      console.log("le compte n'existe pas");
    }
  }
  console.log(lesComptes);
});

// buttonVirement.addEventListener("click",function(){
//   console.log("test_virement");
//   let compteSource = "";
//   let compteCible = "";
//   for (const leCompte of lesComptes){
//     if (leCompte.nom == cible.value ){
//       compteCible = leCompte;
//     } 
//     if (leCompte.nom == source.value) {
//       compteSource = leCompte;
//     }
    
//   }
//   compteSource.virement(parseInt(montant_virement.value),compteCible.nom);

// });

buttonVirement.addEventListener("click", function () {
  console.log("test_virement");

  let compteSource = null;
  let compteCible = null;

  for (const leCompte of lesComptes) {
    if (leCompte.nom === cible.value) {
      compteCible = leCompte;
    }
    if (leCompte.nom === source.value) {
      compteSource = leCompte;
    }
  }

  if (compteSource && compteCible) {
    compteSource.virement(parseInt(montant_virement.value), compteCible);
    console.log(lesComptes);
    para.textContent = `Virement de ${montant_virement.value}€ de ${compteSource.nom} vers ${compteCible.nom} effectué.`;
  } else {
    para.textContent = "Compte source ou cible introuvable.";
    console.log("Erreur : compte source ou cible introuvable");
  }
});



