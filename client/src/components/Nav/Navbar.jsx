// import React from "react";
// Bring in accompanying css file
import "./Navbar.css";

// Import logo and cart icon from assets folder
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon5.png";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            width="200"
            height="100"
            className="d-inline-block align-text-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#candles">Shop Candles</Nav.Link>
            <Nav.Link href="#bundles">Shop Budles</Nav.Link>
          </Nav>
          <Nav className='r-nav'>
          <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#cart">
            <img
            src={cart_icon}
            alt="Logo"
            width="35"
            height="35"
            className="d-inline-block align-text-top"
          />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;