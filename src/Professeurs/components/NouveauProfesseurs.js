import React, {useState} from "react";

function NouvelObjectif({adresseMethode}) {
  
  const [nom, setSaisieNom] = useState(
    ""
  )
  

 

  function ajouterNouvelObjectifHandler(event) {
   event.preventDefault();
    const nouveauProf = {
      id: "12",
      nom: nom,
      image: "https://www.ipafribourg.ch/wp-content/uploads/2017/02/inconnu.jpg",
      cours:"Aucun Cours"
    };

    // sil ny a rien dans nom ou prenom
    if(nom===""){
      alert("Veuillez entrer un nom")
      return;
    }
    
    adresseMethode(nouveauProf);
    setSaisieNom("")
    

   
    
  }

  //si le nom contient un nombre
  function saisieNomHandler(event){
    setSaisieNom(event.target.value);
    if(isNaN(event.target.value)){
      return;
    }
    else{
        alert("Entrez un nom correct")
        
    }
    
  }



 


  return (
    <form onSubmit={ajouterNouvelObjectifHandler}>
      <input  type="text" value={nom}  onChange={saisieNomHandler}/> Nom <br/>
     
      <button type="submit">Soumettre le formulaire</button>
    </form>
  );
}

export default NouvelObjectif;
