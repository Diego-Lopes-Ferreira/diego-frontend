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
          <Route path='/' exact component={Home} />
          <Route path='/business-card' exact component={BusinessCard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
