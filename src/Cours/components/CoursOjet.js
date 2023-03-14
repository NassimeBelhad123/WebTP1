import React, { useState } from 'react';
import DateCours from "./DateCours"
import Card from '../UI/Card'
import './CoursObjet.css'

const CoursObjet = (props) => {

  const [showEtudiants, setShowEtudiants] = useState(false);

  const toggleEtudiantsHandler = () => {
    setShowEtudiants((prevState) => !prevState);
  }

  const handleClick = () => {
    props.onClick(props.id);
  }

  return (
    <li>
      <Card className='classes-item'>
        <DateCours dateDebut={props.dateDebut} />
        <p className = "mot">jusqu'au </p>
        <DateCours dateDebut={props.dateFin} />
        <div className='classes-item__description'>
          <div>
            <h2 className='coursDetails' onClick={toggleEtudiantsHandler}>{props.titre}</h2>
            <p className={`infos-box2 ${showEtudiants ? 'open' : ''}`}>
              Liste des etudiants: {props.etudiants} <br />Le professeur est {props.professeur}
            </p>
          </div>
        </div>
        
      </Card>
    </li>
  );
};
export default CoursObjet;
