import React, {useState} from "react";
import "./NouveauProfesseur.css"


function NouvelObjectif({adresseMethode}) {
  
  const [nom, setSaisieNom] = useState(
    ""
  )
  const [prenom, setSaisiePrenom] = useState(
    ""
  )
 

 

  function ajouterNouvelObjectifHandler(event) {
   event.preventDefault();
    const nouveauProf = {
      id: "12",
      prenom: prenom,
      nom: nom,
      image: "https://www.ipafribourg.ch/wp-content/uploads/2017/02/inconnu.jpg",
      cours:"Aucun Cours"
    };

    // sil ny a rien dans nom ou prenom
    if(nom===""){
      alert("Veuillez entrer un nom")
      return;
    }
    if(prenom ===""){
      alert("Veuillez entrer un prenom")
      return;
    }
    
    
    adresseMethode(nouveauProf);
    setSaisieNom("")
    setSaisiePrenom("")
    
    

   
    
  }

  //si le nom contient un nombre
  function saisieNomHandler(event){
    setSaisieNom(event.target.value);
    if (/\d/.test(event.target.value)) {
      alert("Entrez un nom convenable")
    }
    
  }

  function saisiePrenomHandler(event){
    const input = event.target.value
    setSaisiePrenom(input);
    if (/\d/.test(input)) {
      alert("Entrez un nom convenable")
    }

  }

 



 


  return (
    <form className = "formulaireStyle" onSubmit={ajouterNouvelObjectifHandler}>
    <div className="textFormulaire">
      <h2>Formulaire</h2>
      <div className = "new-prof__control">
       <label>Nom</label>
       <input  type="text" value={nom}  onChange={saisieNomHandler}/>  <br/>
      </div>

      <div className="new-prof__control">
        <label>Prenom</label>
        <input type = "text" value = {prenom} onChange = {saisiePrenomHandler}/> <br/>
      </div>

     

      
      <button type="submit">Soumettre le formulaire</button>
      </div>
    </form>
  );
}

export default NouvelObjectif;
