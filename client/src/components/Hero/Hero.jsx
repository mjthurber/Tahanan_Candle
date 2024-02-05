import React from "react";
import "./Hero.css";
import owner from "../assets/owner.jpg";
import arrow_icon from "../assets/arrow_icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <img src={owner} alt="owner" />
        <div>
            <h1>Magandang Araw, Good Day!</h1>
            <div>
                <p>I'm Jez, owner and creator of Tahanan Candle Company</p>
                <p>Filipina-ownded with scents inspired by the Philippines</p>
            </div>
            <div className="hero-btn">
                <div>Learn more about the inspiration behind Tahanan Candle Co.</div>
                <img src={arrow_icon} alt="arrow" />
            </div>
        </div>
      </div>
      <div className="hero-right">

      </div>
    </div>
  );
};

export default Hero;
