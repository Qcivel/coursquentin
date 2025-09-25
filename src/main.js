import './style.css'
import { apiKey } from './env.js'

// const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid='+apiKey)
//   .then(response => {
//     console.log(response)
//     return response
//   })
//   .then(data=>{
//     return data.json();
//   });

//   console.log(meteo);
// avec une fonction fléché
//   const apiMeteo = async () =>{//deuxiemme façon de traiter une requete avec sa reponse
//   return await fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid='+apiKey)
//     .then(response => {
//         return response.json();//avec console log on peut choisir 
//     });
// }
// apiMeteo().then(json => {
//   console.log(json);
// })

// Avec une fonction normal
async function apiFunction() {
    return await fetch('https://api.openweathermap.org/data/2.5/weather?lang=fr&q=paris&appid='+apiKey)
    .then(response => {
        return response.json();
    });
}

apiFunction().then(json => {
  console.log(json.name);
  console.log(json.coord.lon);
  console.log(json.weather[0].main);
}) 
