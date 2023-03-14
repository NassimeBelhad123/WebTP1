import React, {useState} from "react";



function NouvelObjectif({adresseMethode}) {
  
  const [names1, setSaisieNom] = useState(
    ""
  )
  

 

  function ajouterNouvelObjectifHandler(event) {
   event.preventDefault();
    const nouvelEtudiant = {
      nom: names1
    };

    // sil ny a rien dans nom ou prenom
    if(names1===""){
      alert("Veuillez entrer un nom")
      return;
    }
    
    
    adresseMethode(nouvelEtudiant);
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
    <form className = "formulaireStyle" onSubmit={ajouterNouvelObjectifHandler}>
    <div className="textFormulaire">
      <h2>Formulaire</h2>
      <div className = "new-prof__control">
       <label>Nom</label>
       <input  type="text" value={names1}  onChange={saisieNomHandler}/>  <br/>
      </div>

      

      
      <button type="submit">Soumettre le formulaire</button>
      </div>
    </form>
  );
}

export default NouvelObjectif;
