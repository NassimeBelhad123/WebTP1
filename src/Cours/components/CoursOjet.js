import React from 'react';
import DateCours from "./DateCours"
import Card from '../UI/Card'
import './CoursObjet.css'


const CoursObjet = (props)=>{
    return(
        <li>
            <Card className = 'expense-item'>
                <DateCours dateDebut={props.dateDebut}/>
                <div className = 'expense-item__description'>
                    <h2>{props.titre}</h2>
                    <h2>{props.discipline}</h2>
                </div>
            </Card>
        </li>
    );
};
export default CoursObjet;


