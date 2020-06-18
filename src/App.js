import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index';
import BusinessCard from './pages/BusinessCard/index'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          {/* Home Pages */}
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={() => (<div><h1>Projects</h1></div>)} />

          {/* Projects */}
          {/* Business Card */}
          <Route path='/projects/business-card' exact component={BusinessCard} />
          
          {/* Be The Hero */}
          <Route path='/projects/bethehero' exact component={() => (<div><h1>Be The Hero - Home</h1></div>)} />
          
          {/* Ecoleta */}
          <Route path='/projects/ecoleta' exact component={() => (<div><h1>Ecoleta - Home</h1></div>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
