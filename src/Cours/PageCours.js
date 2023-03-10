import React from "react"
import { useState } from "react";

function PageCours(){
    const cours = [

        {
            id:"CO123",
            titre: "Astronomie",
            discipline: "astronomie",
            nombreMax: 20,
            dateDebut: new Date(2023, 1, 23),
            dateFin: new Date(2023, 5, 21),
        },
        {
            id:"CO432",
            titre: "Défense contre les forces du mal",
            discipline: "Magie",
            nombreMax: 18,
            dateDebut: new Date(2023, 1, 26),
            dateFin: new Date(2023, 5, 27),
        },
        {
            id:"CO980",
            titre:"Botanique",
            discipline:"botanique",
            nombreMax:15,
            dateDebut: new Date(2023, 3, 25),
            dateFin: new Date(2023, 6, 6),
        },
        {
            id: "CO603",
            titre:"Métamorphose",
            discipline: "magie",
            nombreMax: 21,
            dateDebut: new Date(2023, 1, 29),
            dateFin: new Date(2023, 5, 17),
        },
        {
            id:"CO501",
            titre: "Vol au balais",
            discipline: "magie",
            nombreMax: 12,
            dateDebut: new Date(2023, 2, 1),
            dateFin: new Date(2023, 5, 21),
        },
        {
            id:"CO211",
            titre: "Sortilège de guérison",
            discipline: "magie",
            nombreMax: 23,
            dateDebut: new Date(2023, 1, 23),
            dateFin: new Date(2023, 5, 29),
        },
        {
            id:"CO999",
            titre: "Potions",
            discipline: "magie",
            nombreMax:15,
            dateDebut: new Date(2023, 1, 5),
            dateFin: new Date(2023, 6, 5),
        },
        {
            id:"CO768",
            titre: "Histoire de la magie",
            discipline: "magie",
            nombreMax: 20,
            dateDebut: new Date(2023, 1, 23),
            dateFin: new Date(2023, 5, 15),
        },
        {
            id:"CO326",
            titre: "Soins aux créatures magiques",
            discipline: "zoologie magique",
            nombreMax: 12,
            dateDebut: new Date(2023, 3, 15),
            dateFin: new Date(2023, 6, 2),
        },
        {
            id:"CO103",
            titre: "Études moldues",
            discipline: "anthropologie",
            nombreMax: 25,
            dateDebut: new Date(2023, 2, 2),
            dateFin: new Date(2023, 4, 27),
        },
        {
            id:"CO393",
            titre: "Arithmancie",
            discipline: "numérologie",
            nombreMax: 19,
            dateDebut: new Date(2023, 1, 23),
            dateFin: new Date(2023, 4, 29),
        },
        {
            id:"CO000",
            titre: "Enchantement",
            discipline: "magie",
            nombreMax: 20,
            dateDebut: new Date(2023, 2, 1),
            dateFin: new Date(2023, 5, 19),
        }




    ]
    

}



export default PageCours;