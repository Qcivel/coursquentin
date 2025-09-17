
const produit = document.querySelectorAll("input");
const quantite = document.querySelectorAll("input");
const prix = document.querySelectorAll("input");

const monLien = document.querySelector("button");

// Vérifi si tout les liens fonctionnes. 
// monLien.addEventListener("click", function (){
//     console.log("test click");
   
// })
// produit[0].addEventListener("click", function (){
//     console.log("test produit");
    

// })
// quantite[1].addEventListener("click", function (){
//     console.log("test quantite");
    

// })
// prix[2].addEventListener("click", function (){
//     console.log("test prix");


// })

// Vérifi si les champs son remplis.
monLien.addEventListener("click", function (){
    
        if ((produit[0].value == '') || (quantite[1].value == '') || (prix[2].value == '')  ){
            alert("veuillez remplir tous les champs");
        }

    
})

//prendre les informations du formulaire 