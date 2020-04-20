import React from 'react';

import { BrowserRouter } from "react-router-dom";

import NavBar from './components/navBar';

// import Contact from 'components/contact';

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
