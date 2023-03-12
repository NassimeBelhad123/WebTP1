import React from 'react'

import CoursObjet from './CoursOjet'
import "./ListeCours.css"


const ListeCours = (props) =>{
    if(props.items.length === 0){
        return <h2 className = 'expense-list__fallback'>Les cours durant cette session étaient annulés en raison du conflit avec les mages noirs.</h2>;
    }
    return(
        <ul className  ='expense-list'>
            {props.items.map((cours) =>(
                <CoursObjet
                    key={cours.id}
                    titre={cours.titre}
                    discipline = {cours.discipline}
                    nombreMax = {cours.nombreMax}
                    dateDebut = {cours.dateDebut}
                    dateFin = {cours.dateFin}
                    professeur = {cours.professeur}
                    etudiants = {cours.etudiants}

                    />
            ))}
        </ul>
    );
};
export default ListeCours;