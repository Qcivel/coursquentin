import Imc  from './imc.js';

// const chabal = new Imc("Sébastien Chabal",135,1.7);
// const escaladeuse = new Imc("Escaladeuse", 45, 1.68);
// const jojo = new Imc("JOJO", 300, 2);
// const gontrand = new Imc("Gontrand", 90, 1.75);
// const colonel = new Imc("Colonel Clock", 90, 1.75);
// const josiane = new Imc("Josiane de la Vega", 99, 1.55);


// console.log (chabal.calculImc());
// console.log(chabal.display());

let list = [

    new Imc("Sébastien Chabal",135,1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO", 300, 2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 90, 1.75),
    new Imc("Josiane de la Vega", 99, 1.55),

];


let i = 0;

while (i < list.length){
    console.log(list[i].display());
    i++
}
