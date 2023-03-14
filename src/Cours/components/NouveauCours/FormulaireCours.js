import React, {useState } from "react"

import "./FormulaireCours.css"

const FormulaireCours = (props) =>{
  const  [saisieTitre, setSaisieTitre] = useState('');
  const [saisieDiscipline, setSaisieDiscipline] = useState('');
  const [saisieDateDebut, setSaisieDateDebut] = useState('');
  const [saisieDateFin, setSaisieDateFin] = useState('')



const changementTitreHandler = (event) =>{
    setSaisieTitre(event.target.value);
}
const changementDisciplineHandler = (event)=>{
    setSaisieDiscipline(event.target.value);
}
const changementDateDebutHandler = (event) =>{
    setSaisieDateDebut(event.target.value);
}
const changementDateFinHandler = (event) =>{

    setSaisieDateFin(event.target.value);
}





const submitHandler = (event) =>{
    event.preventDefault();


    const donnesCours = {
        titre:saisieTitre,
        discipline:saisieDiscipline,
        dateDebut:new Date(saisieDateDebut),
        dateFin:new Date(saisieDateFin),

    };

    props.onSaveClassData(donnesCours);
    setSaisieTitre('');
    setSaisieDiscipline('');
    setSaisieDateDebut('');
    setSaisieDateFin('');
};

return(
    <form onSubmit={submitHandler}>
        <div className = 'new-class__controls'>
            <div className = "new-class__control">
                <label>Cours</label>
                <input
                    type='text'
                    value={saisieTitre}
                    onChange = {changementTitreHandler}
                />
            </div>
            <div className="new-class__control">
                <label>Discipline</label>
                <input
                    type='text'
                    value={saisieDiscipline}
                    onChange={changementDisciplineHandler}
                    />
            </div>
            <div className='new-class__control'>
          <label>Date de début</label>
          <input
            type='date'
            min='2023-01-01'
            max='2023-03-01'
            value={saisieDateDebut}
            onChange={changementDateDebutHandler}
          />
        </div>
        <div className='new-class__control'>
          <label>Date de fin</label>
          <input
            type='date'
            min='2023-03-02'
            max='2023-06-06'
            value={saisieDateFin}
            onChange={changementDateFinHandler}
          />
        </div>
        </div>
        <div className = "new-class__actions">
            <button type = "button" onClick={props.onCancel}>Annuler</button>
            <button type = "submit">Ajouter un cours</button>
        </div>
    </form>
);
};
export default FormulaireCours