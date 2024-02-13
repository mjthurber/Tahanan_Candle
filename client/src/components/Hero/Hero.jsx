import React from "react";
import "./Hero.css";
import arrow_icon from "../../assets/arrow_icon.png";
import Card from "react-bootstrap/Card";

const Hero = () => {
  return (
    <div className="hero">
      <Card className="hero-card" id="hero-card-styling">
        <Card.Body style={{height: '400px'}}>
          <Card.Title className="title" >Magandang Araw, Good Day!</Card.Title>
          <Card.Subtitle className="mb-2">
            Welcome to Tahanan Candle Company
          </Card.Subtitle>
          
          <p className="p1">Learn more about the inspiration</p>
          <p>behind Tahanan Candle Co.</p>
          <Card.Link className="arrow" href="about">
            <img src={arrow_icon} alt="arrow" />
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Hero;
