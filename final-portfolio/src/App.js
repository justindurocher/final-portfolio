import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './components/navBar';

import Contact from 'components/contact';

import Portfolio from 'components/portfolio';

import About from 'components/about';

import DocumentMeta from 'react-document-meta';

const meta = {

    title: 'My Portfolio',
    name: 'viewport',
    content : {
      width: 'device-width'
    }

}

function App() {
  return (
    <div className="app">

      <DocumentMeta {...meta}/>

      <BrowserRouter>

      <NavBar></NavBar>

      <Switch>

        <Route path="/" component={About} exact />
        <Route path="/portfolio" component={Portfolio} exact/>
        <Route path="/contact" component={Contact} exact/>

      </Switch>
      
      </BrowserRouter>

    </div>
      
  );
}

export default App;
