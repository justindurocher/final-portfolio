import React, { Component } from "react";

import * as Bootstrap from 'react-bootstrap';

import './css/navBar.css';



class navbar extends Component {
    render(){
        return(

            <Bootstrap.Navbar bg="info" variant="dark">
            <Bootstrap.Navbar.Brand href="#home">Justin Durocher</Bootstrap.Navbar.Brand>
            <Bootstrap.Nav className="mr-auto">
              <Bootstrap.Nav.Link href="#home">About Me</Bootstrap.Nav.Link>
              <Bootstrap.Nav.Link href="#features">Projects</Bootstrap.Nav.Link>
              <Bootstrap.Nav.Link href="#pricing">Resume</Bootstrap.Nav.Link>
              <Bootstrap.Nav.Link href="#contact">Contact Me</Bootstrap.Nav.Link>
            </Bootstrap.Nav>
            </Bootstrap.Navbar>

        )
    }
}

export default navbar;