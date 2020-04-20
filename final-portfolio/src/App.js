import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './components/navBar';

import About from './components/about';

import Contact from 'components/contact';

function App() {
  return (
    <div className="app">

      <BrowserRouter>

      <NavBar></NavBar>
      
      </BrowserRouter>

    </div>
      
  );
}

export default App;
