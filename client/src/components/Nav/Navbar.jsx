import React from 'react';
// Bring in accompanying css file
import './Navbar.css';

// Import logo and cart icon from assets folder
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon5.png'
import { Link } from 'react-router-dom';

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

export default Navbar;