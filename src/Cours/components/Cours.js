import React, {useState} from 'react'

import Card from '../UI/Card'
import FiltreCours from './FiltreCours'
import ListeCours from './ListeCours'
import "./Cours.css"


const Filtre = (props) => {
    const [filteredSession, setFilteredSession] = useState('2023');

    const filterChangeHandler = (selectedSession) => {
        setFilteredSession(selectedSession);
    };

    const coursFiltrees = props.items.filter((cours) =>{
        return cours.dateDebut.getFullYear().toString() === filteredSession;
    });


    return(
        <div>
            <Card className = 'classes'>
                <FiltreCours
                selected = {filteredSession}
                onChangementFiltre = {filterChangeHandler}
                />
                <ListeCours items = {coursFiltrees} />
            </Card>
        </div>
    );
};

export default Filtre;