import React from 'react';
import MainComponent from './MainComponent'
import DetailCard from './Components/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/pokemons" component = {MainComponent}/>
           <Route exact path="/pokemons/:id" component = {DetailCard}/> 
         <Redirect to="/pokemons"></Redirect> 
      </Switch>
    </Router>
  );
}

export default App;
