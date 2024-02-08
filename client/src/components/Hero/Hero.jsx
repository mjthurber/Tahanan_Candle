import React from "react";
import "./Hero.css";
import background from "../../assets/hero-background.jpg";
import arrow_icon from "../../assets/arrow_icon.png";

import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const Hero = () => {
 
    return(
   <div class="hero">
    <Card.Body>
        <Card.Title>Magandang Araw, Good Day!</Card.Title>
         <Card.Subtitle className="mb-2 text-muted">Welcome to Tahanan Candle Company</Card.Subtitle>
        <Card.Text>
        I'm Jez, owner and creator of Tahanan Candle Company.Filipina-ownded with scents inspired by the Philippines
        </Card.Text>
        <p>Learn more about the inspiration behind Tahanan Candle Co.</p>
        <Card.Link class="arrow" href="#about"><img src={arrow_icon} alt="arrow" /></Card.Link>
      </Card.Body>
</div> 
    );
}
  
  export default Hero;
