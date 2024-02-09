import React from "react";
import "../Hero/Hero.css";

const Header = ({pageName}) => {
    return (
        <div className="hero">
            <div className="hero-left">
                <div>
                    <h1>{pageName}</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;