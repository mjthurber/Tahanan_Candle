// import React from "react";
// Bring in accompanying css file
import "./Navbar.css";
import {useLocation} from 'react-router-dom';

// Import logo and cart icon from assets folder
import logo from "../../assets/logo.png";
import Cart from '../Cart';

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../../utils/auth';


function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
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
        <Navbar.Toggle className="navbar-light bg-light" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={currentPage === '/' ? 'nav-link-active' : 'nav-link'}>Home</Nav.Link>
            <Nav.Link href="/about" className={currentPage === '/about' ? 'nav-link-active' : 'nav-link'}>About Us</Nav.Link>
            <Nav.Link href="/candles" className={currentPage === '/candles' ? 'nav-link-active' : 'nav-link'}>Shop Candles</Nav.Link>
            <Nav.Link href="/bundles" className={currentPage === '/bundles' ? 'nav-link-active' : 'nav-link'}>Shop Bundles</Nav.Link>
            <Nav.Link href="/contact" className={currentPage === '/contact' ? 'nav-link-active' : 'nav-link'}>Contact</Nav.Link>
          </Nav>
          <Nav className='r-nav'>
            {Auth.loggedIn() ? ( 
              <Nav>
                <Nav.Link href="/orderHistory" className={currentPage === '/orderHistory' ? 'nav-link-active' : 'nav-link'}>Order History</Nav.Link>
                <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
              </Nav>
            ) : (
            <Nav.Link href="/login" className={currentPage === '/login' ? 'nav-link-active' : 'nav-link'}>Login</Nav.Link>
            )}
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;