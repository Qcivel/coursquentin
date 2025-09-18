import {Pme, Employee}  from './pme.js';


const pme = new Pme (
    "Ma petite Entreprise",
    [new Employee ("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee ("Dois", "Sylvia", 50, 4000),],
    300000,
    20000,
    50000);
    pme.bilanCalculed();

        
        