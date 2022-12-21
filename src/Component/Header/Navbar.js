import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";


function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="navbar-wrapper">
          <Navbar.Brand href="/" className="header_text"> Rent Duniya </Navbar.Brand>
          <Nav  className="signup-navbar">
            <Nav.Link href="/login">Login</Nav.Link> 
            <Nav.Link href="/">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
