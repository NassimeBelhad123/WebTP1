import React from 'react';

import Card from '../UI/Card'
import './CoursObjet.css'


const CoursObjet = (props)=>{
    return(
        <li>
            <Card className = 'expense-item'>
                <div className = 'expense-item__description'>
                    <h2>{props.titre}</h2>
                </div>
            </Card>
        </li>
    );
};
export default CoursObjet;


