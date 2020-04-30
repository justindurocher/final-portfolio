import React, { Component } from "react";

import * as Bootstrap from 'react-bootstrap';

import './css/navBar.css';



class navbar extends Component {
    render(){
        return(

            <Bootstrap.Navbar bg="info" variant="dark" sticky="top">
            <Bootstrap.Navbar.Brand href="#home">Justin Durocher</Bootstrap.Navbar.Brand>
            <Bootstrap.Nav className="mr-auto">
              <Bootstrap.Nav.Link href="/">About Me</Bootstrap.Nav.Link>
              <Bootstrap.Nav.Link href="/portfolio">Projects</Bootstrap.Nav.Link>
              <Bootstrap.Nav.Link href="https://docs.google.com/document/d/16A5Z64eX0jHCl3c2y4zLkMO4XZwj6elAXm6BUK64ct4/edit?usp=sharing">Resume</Bootstrap.Nav.Link>
              <Bootstrap.Nav.Link href="/contact">Contact Me</Bootstrap.Nav.Link>
            </Bootstrap.Nav>
            </Bootstrap.Navbar>

        )
    }
}

export default navbar;