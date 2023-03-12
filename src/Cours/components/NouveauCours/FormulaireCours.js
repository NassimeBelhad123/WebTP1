import React, {useState } from "react"

import "./FormulaireCours.css"

const FormulaireCours = (props) =>{
  const  [saisieTitre, setSaisieTitre] = useState('');



const changementTitreHandler = (event) =>{
    setSaisieTitre(event.target.value);
}




const submitHandler = (event) =>{
    event.preventDefault();


    const donnesCours = {
        titre:saisieTitre
    };

    props.onSaveClassData(donnesCours);
    setSaisieTitre('');
};

return(
    <form onSubmit={submitHandler}>
        <div className = 'new-expense__controls'>
            <div className = "new-expense__control">
                <label>Cours</label>
                <input
                    type='text'
                    value={saisieTitre}
                    onChange = {changementTitreHandler}
                />
            </div>
        </div>
        <div className = "new-expense__actions">
            <button type = "button" onClick={props.onCancel}>Annuler</button>
            <button type = "submit">Ajouter un cours</button>
        </div>
    </form>
);
};
export default FormulaireCours