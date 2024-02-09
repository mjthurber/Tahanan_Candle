// import React from "react";
// Bring in accompanying css file
import "./Navbar.css";

// Import logo and cart icon from assets folder
import logo from "../../assets/logo.png";
import Cart from '../Cart';

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../../utils/auth';


function Navigation() {
  return (
    <Navbar id='cont' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/candles">Shop Candles</Nav.Link>
            <Nav.Link href="/bundles">Shop Budles</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className='r-nav'>
            {Auth.loggedIn() ? (
              <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;