import React from 'react';

import * as Bootstrap from 'react-bootstrap';





function App() {
  return (
    <Bootstrap.Navbar bg="info" variant="dark">
    <Bootstrap.Navbar.Brand href="#home">Justin Durocher</Bootstrap.Navbar.Brand>
    <Bootstrap.Nav className="mr-auto">
      <Bootstrap.Nav.Link href="#home">Home</Bootstrap.Nav.Link>
      <Bootstrap.Nav.Link href="#features">Features</Bootstrap.Nav.Link>
      <Bootstrap.Nav.Link href="#pricing">Pricing</Bootstrap.Nav.Link>
    </Bootstrap.Nav>
    </Bootstrap.Navbar>
  );
}

export default App;
