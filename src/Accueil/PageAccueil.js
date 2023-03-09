import React from "react"
import "./PageAccueil.css"

function Accueil(){
    return(
        <div>
            
            <img className="img" src="https://i.pinimg.com/originals/0a/41/0e/0a410e3a4f03610eed0dbbbcd2f0a3db.png" alt = "logo montmorency"/>
            <p className="description">Bienvenue au collège Poudlard, l'école de magie la plus célèbre au monde! Poudlard est un château majestueux
                                       rempli de mystères et de magie. Les cours à Poudlard sont enseignés par de sprofesseurs qualifiés et compétents, 
                                       chacun ayant une ou plusieurs expertises dans des domaines spéficiques de la magie. Le directeur de l'école, Mr.
                                        Nassime Belhad. qui est reconnu comme étant l'un des plus grands sorciers du monde, accueil toujours ses étudiants 
                                        à bras ouvert pour leur faire découvrir ce monde magique! Les professeurs de Poudlard sont passionnés par leur 
                                        enseignements et sont dévoués à aider les élèves à réussir. Vous pouvez voir dans l'onglet "professeur" la liste 
                                        des professeurs ainsi que les cours qu'il donne. Pour un nouveau professeur qui souhaiterait s'inscrire, un formulaire 
                                        est disponible pour cela. L'onglet Cours propose la liste des cours pour la session actuelle ainsi que les cours des 4 
                                        dernières sessions. Il est également possible de rajouter un cours avec un formulaire. Chaque cours contient des détails
                                         concernant celui-ci. Au plaisir de vous revoir en cours!
            </p>
        </div>

    )
}

export default Accueil