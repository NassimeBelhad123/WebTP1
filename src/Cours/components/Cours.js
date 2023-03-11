import React, {useState} from 'react'

import Card from '../UI/Card'
import FiltreCours from './FiltreCours'
import ListeCours from './ListeCours'
import "./Cours.css"


const Filtre = (props) => {
    const [filtreSession, setFiltreSession] = useState('Hiver 2023');

    const filterChangeHandler = (selectedSession) => {
        setFiltreSession(selectedSession);
    };

    const coursFiltrees = props.items.filter((cours) =>{
        return cours.date.getFullYear().toString() === filtreSession
    });


    return(
        <div>
            <Card className = 'expenses'>
                <FiltreCours
                selected = {filtreSession}
                onChangementFiltre = {filterChangeHandler}
                />
                <ListeCours items = {coursFiltrees} />
            </Card>
        </div>
    );
};

export default Filtre