import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import PageAccueil from './Accueil/PageAccueil';




function App(){
    return( 
    <Router>
      
      <main>
       <Switch>
        <Route path="/" exact>
          <PageAccueil />
        </Route>
        
        <Redirect to="/"/>
  
       </Switch>
      </main>
    </Router>
    );
  }
  
  export default App;