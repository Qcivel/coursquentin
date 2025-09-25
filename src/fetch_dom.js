
import { apiKey } from './env';

const bloc_meteo = document.querySelector("#bloc_meteo");
const city = document.querySelector("#city");
const bt_charger = document.querySelector("#charger");

const box = document.createElement("div");
box.style.display = "flex";
box.style.flexDirection = "column";
bloc_meteo.appendChild(box);



for (let i = 0 ; i < 3 ; i++){
    const titre = document.createElement("h2");
    // titre.style.width="auto";
    // titre.style.height="10vh";
    // titre.style.backgroundColor="grey";
    // titre.style.textAlign="center";
    // titre.style.alignContent="center";
    // titre.style.paddingTop="20px";
    // titre.style.paddingBottom="20px";
    titre.setAttribute("style","width:auto; height:10vh; background-Color:grey;text-Align:center;align-Content:center;padding-Top:20px;padding-Bottom:20px");
    titre.textContent = "";
    titre.setAttribute("id",`title${i+1}`);
    box.appendChild(titre);
}

async function getMeteoJson(ville) {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?lang=fr&q=${ville}&units=metric&appid=${apiKey}`)
    .then(response => {
        if (response.status == 200 ){
        return response.json();
        } 
        if (response.status != 200){
            return response
        }
        
    }).catch (erreur => {
        throw new Error ("le serveur ne repond pas");
    }) 
        
}



bt_charger.addEventListener("click", function(){
    
    const titre1 = document.querySelector("#title1");
    const titre2 = document.querySelector("#title2");
    const titre3 = document.querySelector("#title3");
    
    getMeteoJson(city.value).then(json => {
        try {
            if (json.status === undefined){
                titre1.textContent=`Ville : ${json.name}`;
                titre2.textContent=`Température : ${json.main.temp}`;
                titre3.textContent= `Temps : ${json.weather[0].description}`;
            } else {
                titre1.textContent="Ville inconnue";
                titre2.textContent="";
                titre3.textContent="";
            }
            
        } catch (erreur) {
                titre1.textContent=erreur.message;
    }
        });
});
