import React from "react";
import "./Hero.css";
import arrow_icon from "../../assets/arrow_icon.png";

import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const Hero = () => {
  return (
    <div className="hero">
      <Card className="hero-card" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="title" >Magandang Araw, Good Day!</Card.Title>
          <Card.Subtitle className="mb-2">
            Welcome to Tahanan Candle Company
          </Card.Subtitle>
          
          <p>Learn more about the inspiration behind Tahanan Candle Co.</p>
          <Card.Link className="arrow" href="about">
            <img src={arrow_icon} alt="arrow" />
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Hero;
