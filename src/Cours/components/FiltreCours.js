import React from "react"

import "./FiltreCours.css"


const FiltreCours = (props) =>{
    const menuDeroulantHandler = (event) =>{
        props.onChangementFiltre(event.target.value);
    };




    return(
        <div className = 'expenses-filter'>
            <div className = 'expenses-filter__control'>
                <label>Filtrer les cours par session</label>
                <select value = {props.selected} onChange={menuDeroulantHandler}>
                    <option value = "2023">Hiver 2023</option>
                    <option value = "2022">Automne 2022</option>
                    <option value = "2022">Hiver 2022</option>
                    <option value = "2021">Automne 2021</option>
                </select>
            </div>
        </div>
    );
    
};

export default FiltreCours;