import React from "react"
import { useState } from "react";


import Cours from "./components/Cours"
import NouveauCours from "./components/NouveauCours/NouveauCours";


const names = ["Camille Martin", "Emma Dupont", "Lucas Girard", "Léa Bernard", "Théo Lefebvre", "Manon Dubois", "Hugo Moreau", "Sarah Rousseau", "Nicolas Mercier", "Elodie Dupuis"]
const names2 = ["Emma Smith", "David Lee", "Sarah Williams", "James Johnson", "Sophia Garcia", "Benjamin Davis", "Olivia Brown", "William Hernandez", "Isabella Rodriguez", "Michael Martinez", "Charlotte Anderson", "Christopher Thompson"]
const names3 = ["Emily Nguyen", "Alexander Kim", "Avery Jackson", "Noah Patel", "Aria Chen", "Daniel Lee", "Grace Davis", "Ethan Rodriguez", "Madison Kim", "Samuel Garcia", "Sophie Wilson", "Jacob Brown", "Mia Hernandez", "Andrew Wilson", "Avery Baker"]
const names4 = ["Evelyn Carter", "Ryan Lee", "Victoria Johnson", "Nathan Davis", "Leah Martin", "Connor Brown", "Jasmine Rodriguez", "Ian Kim", "Sophia Wilson", "Isaac Hernandez", "Maya Patel", "William Lee", "Chloe Anderson"] 




    const COURSS = [
        
        {
            id:"CO123",
            titre: "Astronomie",
            discipline: "astronomie",
            nombreMax: 20,
            dateDebut: new Date(2023, 1, 23),
            dateFin: new Date(2023, 5, 21),
            professeur: "Sibylle Trelawney",
            etudiants: names.map((cours)=>   <li>{cours}</li>),
        },
        {
            id:"CO432",
            titre: "Défense contre les forces du mal",
            discipline: "Magie",
            nombreMax: 18,
            dateDebut: new Date(2023, 1, 26),
            dateFin: new Date(2023, 5, 27),
            professeur: "Remus Lupin",
            etudiants: names2.map((cours)=>   <li>{cours}</li>),
        },
        {
            id:"CO980",
            titre:"Botanique",
            discipline:"botanique",
            nombreMax:15,
            dateDebut: new Date(2023, 3, 25),
            dateFin: new Date(2023, 6, 6),
            professeur: "Severus Rogue",
            etudiants: names3.map((cours)=>   <li>{cours}</li>),
        },
        {
            id: "CO603",
            titre:"Métamorphose",
            discipline: "magie",
            nombreMax: 21,
            dateDebut: new Date(2023, 1, 29),
            dateFin: new Date(2023, 5, 17),
            professeur: "Severus Rogue",
            etudiants: names4.map((cours)=>   <li>{cours}</li>),
        },
        {
            id:"CO501",
            titre: "Vol au balais",
            discipline: "magie",
            nombreMax: 12,
            dateDebut: new Date(2022, 2, 1),
            dateFin: new Date(2022, 5, 21),
            professeur: "Sibylle Trelawney"
        },
        {
            id:"CO211",
            titre: "Sortilège de guérison",
            discipline: "magie",
            nombreMax: 23,
            dateDebut: new Date(2022, 1, 23),
            dateFin: new Date(2022, 5, 29),
            professeur: "Sibylle Trelawney"
        },
        {
            id:"CO999",
            titre: "Potions",
            discipline: "magie",
            nombreMax:15,
            dateDebut: new Date(2021, 8, 25),
            dateFin: new Date(2021, 12, 5),
            professeur: "Severus Rogue"
        },
        {
            id:"CO768",
            titre: "Histoire de la magie",
            discipline: "magie",
            nombreMax: 20,
            dateDebut: new Date(2021, 9, 23),
            dateFin: new Date(2021, 12, 15),
            professeur: "Remus Lupin"
        },
        {
            id:"CO326",
            titre: "Soins aux créatures magiques",
            discipline: "zoologie magique",
            nombreMax: 12,
            dateDebut: new Date(2022, 3, 15),
            dateFin: new Date(2022, 6, 2),
            professeur:"Renée Bibine"
        },
        {
            id:"CO103",
            titre: "Études moldues",
            discipline: "anthropologie",
            nombreMax: 25,
            dateDebut: new Date(2022, 2, 2),
            dateFin: new Date(2022, 4, 27),
            professeur:"Renée Bibine"
        },
        {
            id:"CO393",
            titre: "Arithmancie",
            discipline: "numérologie",
            nombreMax: 19,
            dateDebut: new Date(2021, 9, 23),
            dateFin: new Date(2021, 12, 21),
            professeur:"Renée Bibine"
        },
        {
            id:"CO000",
            titre: "Enchantement",
            discipline: "magie",
            nombreMax: 20,
            dateDebut: new Date(2021, 9, 1),
            dateFin: new Date(2021, 12, 19),
            professeur:"Renée Bibine"
        },




    ];

    const  PageCours =() =>{

        const[courss, setCours] = useState(COURSS);

        const ajoutCoursHandler = (cours) =>{
            setCours((ancienCours) =>{
                return [cours, ...ancienCours];
            });
        };

        

        return(
            <div>
                <NouveauCours onAjoutCours = {ajoutCoursHandler}/>
                
                <Cours items = {courss}/>
            </div>
        )
    }
    





export default PageCours;