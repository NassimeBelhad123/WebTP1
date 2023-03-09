import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";
import "./Professeur.css"

function Professeurs({professeur}){
    return (
     <li className="prof-item">
        <Card className = "contenu">
        <Link to={`/${professeur.id}/`}>
        <div className="prof-item-image">
            <Avatar image={professeur.image} alt = {professeur.nom}/>
        </div>    

        <div className="prof-item-info">
             <h2>{professeur.nom}</h2>
             <h3>{professeur.cours}</h3>
        </div>
            

        </Link>
        </Card>
     </li>
    );
}
export default Professeurs;