import React from "react";
import { useState } from "react";

import ListeProfesseurs from "./components/ListeProfesseurs";
import NouveauProfesseur from "./components/NouveauProfesseurs";

import "./PageProfesseurs.css"

function PageProfesseurs() {
  const [professeurs, Prof] = useState([
    {
      id: "H21",
      nom: "Mounir Dupuis",
      image: "https://www.radiofrance.fr/s3/cruiser-production/2021/06/f8153bee-2f8a-470d-b08e-9ae38e453ff5/1200x680_maes_rappeur.jpg",
      cours: "cours enseignés: Vol au balais",
    },
    {
      id:"K33",
      nom:"Alez Forzeneger",
      image: "https://www.nextplz.fr/wp-content/uploads/nextplz/2019/09/kaaris-actus-68721923-837762793286518-3632780357916241829-n-e1569248226963.jpg",
      cours: "cours enseignés: Cours de potions",
    },
    {
      id:"D34",
      nom:"Zoger Malfoy",
      image: "https://tchadinfos.com/wp-content/uploads/Naza.jpg",
      cours: "cours enseignés: Cours contre les forces du mal",
    },
    {
      id:"F78",
      nom:"Morimo Diez",
      image: "https://www.printemps-bourges.com/wp-content/uploads/2022/11/LORENZO_600x400_Fifou.png",
      cours: "cours enseignés: Sortilèges dangereux",
    }
  ]);
  




  function AjouterProf(nouveauProf){
    Prof(professeurs.concat(nouveauProf));
    console.log(nouveauProf);
  }


  return(
    <div className="formulaire">
      <ListeProfesseurs professeurs={professeurs} />
      <h2 className = "prof">Formulaire de prof</h2>
      <NouveauProfesseur adresseMethode={AjouterProf}/>
    </div>
  )
}




export default PageProfesseurs;
