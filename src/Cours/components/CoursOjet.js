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
      <Card className='expense-item'>
        <DateCours dateDebut={props.dateDebut} />
        <div className='expense-item__description'>
          <div className="coursDetails">
            <h2 onClick={toggleEtudiantsHandler}>{props.titre}</h2>
            {showEtudiants && <p className="infos-box">Liste des etudiants: {props.etudiants} <br />Le professeur est {props.professeur} </p>}
          </div>
        </div>
      </Card>
    </li>
  );
};
export default CoursObjet;
