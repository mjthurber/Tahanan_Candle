// import React from "react";
// Bring in accompanying css file
import "./Navbar.css";

// Import logo and cart icon from assets folder
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon5.png";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";


const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";
    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/candles"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Shop Candles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bundles"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Shop Bundles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={`${linkClassName} ${buttonClassName}`}
            onClick={closeMobileMenu}
          >
            Login
          </NavLink>
        </li>
      </ul>
    );
  };
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Navigation Bar
        </NavLink>
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}
        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;
    

 {/*    <Nav className="me-0">
        <Nav.Link className='nav-link' href="/">Home</Nav.Link>
        <Nav.Link className='nav-link' href="/about">About</Nav.Link>
        <Nav.Link className='nav-link' href="/candles">Shop Candles</Nav.Link>
        <Nav.Link className='nav-link' href="/bundles">Shop Bundles</Nav.Link>
        {Auth.loggedIn() ? (
          <Nav.Link href="/" onClick={() => Auth.logout()}><Button className="nav-btn">Logout</Button></Nav.Link>
        ) : (
          <Nav.Link href="/login"><Button className="nav-btn">Login</Button></Nav.Link>
        )}


        <Navbar.Brand href="/cart">
          <img
            src={cart_icon}
            width="35"
            height="35"
            className="d-inline-block align-middle"
            alt="Shopping cart icon"
          />
        </Navbar.Brand>
      </Nav> */}
/*  
<nav class="navbar bg-body-tertiary">
      <div className="container-fluid"></div>
        <a class="navbar-brand" href="#home">
          <img
            src={logo}
            alt="Logo"
            width="200"
            height="100"
            class="d-inline-block align-text-top"
          ></img>
        </a>

        <a class="navbar-brand" href="#">
            Navbar w/ text
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <span class="navbar-text">Navbar text with an inline element</span>
      </div>         
          
        
    </nav>
  );
} */