import React from "react";
// Bring in accompanying css file
import "./Navbar.css";

// Import logo and cart icon from assets folder
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon5.png";
/* import { Link } from 'react-router-dom';

const Navbar = () => {

// UseState to underline navbar links when clicked
const [menu, setMenu] = React.useState("home");

    return (
        <div className ='navbar'>
            <div className='navbar_logo'>
                <img src={logo} alt='logo'/>
            </div>
            <ul className='navbar_links'>
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none' }} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("candles")}}><Link style={{ textDecoration: 'none' }} to='/candles'>Shop Candles</Link>{menu==="candles"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("bundles")}}><Link style={{ textDecoration: 'none' }} to='/bundles'>Shop Bundles</Link>{menu==="bundles"?<hr/>:<></>}</li>
                <Link to='/login'><button>Login</button></Link>
            </ul>
            <div className='navbar_cart'>
                <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="shopping bag"/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar; */

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
