import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import PageAccueil from './Accueil/PageAccueil';
import PageProfesseurs from './Professeurs/PageProfesseurs';
import MainNavigation from './shared/Navigation/MainNavigation';
import PageCours from './Cours/PageCours';


function App(){
  return( 
  <Router>
    <MainNavigation />
    <main>
     <Switch>
      <Route path="/" exact>
        <PageAccueil />
      </Route>
      <Route path = "/professeurs">
        <PageProfesseurs />
      </Route>
      <Route path = "/cours">
        <PageCours />
      </Route>
      <Redirect to="/"/>

     </Switch>
    </main>
  </Router>
  );
}

export default App;