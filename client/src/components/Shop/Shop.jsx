import React from "react";
import "./Shop.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import kalamansi from "../../assets/Kalamansi_Flower_8oz.jpg";
import pandan from "../../assets/Pandan_8oz.jpg";
import ubelicious from "../../assets/Ubelicious_8oz.jpg";

import citrus from "../../assets/scent-profiles/citrus.png";
import coconut from "../../assets/scent-profiles/coconut.png";
import vanilla from "../../assets/scent-profiles/vanilla.png";

import { Link } from 'react-router-dom';



//removed capitalization from the file name
const Shop = () => {
  return (
    <Container className="mt-5">
      <h2 className="arrivals">🐚 NEW ARRIVALS 🐚</h2>
      <p className="new-info"></p>
      <Row>
        <Col>
          <Card className="bg-dark text-white shop-card" style={{ width: "18rem", margin: "auto"}}>
            <Card.Img variant="top" className="home-product" src={kalamansi} />
            <Card.Body>
              <Card.Title>KALAMANSI FLOWER </Card.Title>
              <Card.Text>
                Scent Profile:
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-dark text-white">
                <img className='scent_icon' src={citrus} alt="Calamansi" />
                Calamansi
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={citrus} alt="lime" />
                Lime Flowers
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={citrus} alt="Citrus Leaves" />
                Citrus Leaves
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <Card className="bg-dark text-white" style={{ width: "18rem", margin: "auto" }}>
            <Card.Img variant="top" className="home-product" src={pandan} />
            <Card.Body>
              <Card.Title>PANDAN</Card.Title>
              <Card.Text>
              Scent Profile:
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={coconut} alt="pandan leaves" />
                Fresh Pandan Leaves
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={coconut} alt="flower" />
                Coconut
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={coconut} alt="vanilla" />
                Vanilla
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <Card className="bg-dark text-white" style={{ width: "18rem", margin: "auto" }}>
            <Card.Img variant="top" className="home-product" src={ubelicious} />
            <Card.Body>
              <Card.Title>UBELICIOUS</Card.Title>
              <Card.Text>
              Scent Profile:
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={vanilla} alt="sweet nutty" />
                Sweet Nutty
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={vanilla} alt="vanilla" />
                Vanilla
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={vanilla} alt="creamy coconut" />
                Creamy Coconut
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

      </Row>
      <Link to="/candles" style={{margin: "auto", width: "100%", maxWidth: "500px", backgroundColor: "#293F14", padding: "1%", marginTop: "2%", borderRadius: "5px", textDecoration: "none", textAlign: "center"}}className='text-white'>View All Candles</Link>

    </Container>
  );
};

export default Shop;
