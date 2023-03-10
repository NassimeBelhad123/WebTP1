import React from "react"

import "./FiltreCours.css"


const FiltreCours = (props) =>{
    const menuDeroulantHandler = (event) =>{
        props.onChangementFiltre(event.target.value);
    };




    return(
        <div>
            <div>
                <label>Filtrer les cours par session</label>
                <select value = {props.selected} onChange={menuDeroulantHandler}>
                    <option value = "Automne 2022">Automne 2022</option>
                    <option value = "Hiver 2022">Hiver 2022</option>
                    <option value = "Automne 2021">Automne 2021</option>
                    <option value = "Hiver 2023">Hiver 2023</option>
                </select>
            </div>
        </div>
    );
    
};

export default FiltreCours;