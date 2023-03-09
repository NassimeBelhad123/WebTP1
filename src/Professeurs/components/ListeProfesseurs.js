import React from "react";
import Professeur from "./Professeur";
import Card from "../../shared/Card";
import "./ListeProfesseurs.css";



function ListeProfesseurs(props){
   if( props.professeurs.length ===0){
    return(

        <div className="centre">
            <Card>
                <h2>Aucun professeurs disponibles</h2>
            </Card>
        </div>
    );


   }


   return (
    <ul className = "prof-list">
        {props.professeurs.map((professeur) =>(
            <Professeur key = {professeur.id} professeur = {professeur}/>

        ))}
    </ul>
   );

}

export default ListeProfesseurs;