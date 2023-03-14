import React, {useState} from 'react';

import FormulaireCours from './FormulaireCours';
import "./NouveauCours.css"


const NouveauCours = (props) =>{
    const[enEdition, setEnEdition] = useState(false);

    const enregistrerCoursHandler = (coursSaisie) =>{
        const donneesCours = {
            ...coursSaisie,
            id: Math.random().toString(),
        };
        props.onAjoutCours(donneesCours);
        setEnEdition(false);
    };

    const debutEditionHandler = () =>{
        setEnEdition(true);
    };

    const arretEditionHandler = () =>{
        setEnEdition(false);
    };


    return (
        <div className = 'new-class'>
            {!enEdition && (
                <button onClick = {debutEditionHandler}>Ajouter un nouveau cours</button>
            )}
            {enEdition && (
                <FormulaireCours
                   onSaveClassData = {enregistrerCoursHandler}
                   onCancel = {arretEditionHandler}
                   />
            )}
        </div>
    );




};
export default NouveauCours