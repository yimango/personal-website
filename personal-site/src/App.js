import './App.css';
import React from 'react';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import { Route, Switch, Redirect} from "react-router";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;