import React from "react";
import { useState } from "react";

import ListeProfesseurs from "./components/ListeProfesseurs";
import NouveauProfesseur from "./components/NouveauProfesseurs";

import "./PageProfesseurs.css"

function PageProfesseurs() {
  const listeCours = ["vol au balais", "sortilèges de guérison", "astronomie"]
  const listeCours2 = ["Botanique", "Métamorphose", "Potions"]
  const listeCours3 = ["Défense contre les forces du Mal", "Histoire de la magie"]
  const listeCours4 = ["Soins aux créatures magiques", "Études moldues", "Arithmancie", "Enchantement"]

  const [professeurs, Prof] = useState([
    {
      id: "H21",
      prenom:"Sibylle",
      nom: "Trelawney",
      image: "https://i.guim.co.uk/img/media/6a2f20dcba0d029b8495cff4def0b78bc8ef6167/0_6_3072_1843/master/3072.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=70cf4f7a013704243b38b227fc55d7b8",
      cours:  listeCours.map((cours)=>   <li>{cours}</li>),
    },
    {
      id:"K33",
      prenom:"Severus",
      nom:"Rogue",
      image: "https://pbs.twimg.com/profile_images/426039193916035073/iomzYxfK_400x400.jpeg",
      cours: listeCours2.map((cours) => <li>{cours}</li>),
    },
    {
      id:"D34",
      prenom:"Remus",
      nom:"Lupin",
      image: "https://geekalition.com/wp-content/uploads/2022/08/Remus-Lupin-1-930x620.webp",
      cours: listeCours3.map((cours)=>    <li>{cours}</li>),
    },
    {
      id:"F78",
      prenom:"Renée",
      nom:"Bibine",
      image: "http://1.bp.blogspot.com/_ylmkHtECo0E/RpOvHzC8DUI/AAAAAAAAADU/_ujasG49U4E/s200/bibine.jpg",
      cours: listeCours4.map((cours =>   <li>{cours}</li>)),
    }
  ]);
  




  function AjouterProf(nouveauProf){
    Prof(professeurs.concat(nouveauProf));
    console.log(nouveauProf);
  }


  return(
    <div className="formulaire">
      <ListeProfesseurs professeurs={professeurs} />
      <NouveauProfesseur adresseMethode={AjouterProf}/>
    </div>
  )
}




export default PageProfesseurs;
