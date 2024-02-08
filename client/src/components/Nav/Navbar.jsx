import React from "react";
// Bring in accompanying css file
import "./Navbar.css";

// Import logo and cart icon from assets folder
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon5.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="200"
            height="100"
            className="d-inline-block align-top"
            alt="TTCo Logo"
          />
        </Navbar.Brand>
      </Container>

      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/candles">Shop Candles</Nav.Link>
        <Nav.Link href="/bundles">Shop Bundles</Nav.Link>
        <Nav.Link href="/login"><Button class="nav-btn">Login</Button></Nav.Link>

        <Navbar.Brand href="/cart">
          <img
            src={cart_icon}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="Shopping cart icon"
          />
        </Navbar.Brand>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
