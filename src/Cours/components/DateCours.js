import React from 'react';

import './DateCours.css';

const DateDepense = (props) => {
  const mois = props.dateDebut.toLocaleString('fr-CA', { month: 'long' });
  const jour = props.dateDebut.toLocaleString('fr-CA', { day: '2-digit' });
  const annee = props.dateDebut.getFullYear();

  return (
    <div className='class-date'>
      <div className='class-date__month'>{mois}</div>
      <div className='class-date__year'>{annee}</div>
      <div className='class-date__day'>{jour}</div>
    </div>
  );
};

export default DateDepense;
