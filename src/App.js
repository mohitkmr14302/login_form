

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/Home'

import './App.css'
function App() {

  return (
    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/table' component={Table} /> */}


      </Switch>

    </BrowserRouter >
  );
}

export default App;
