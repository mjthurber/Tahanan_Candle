import React from "react";
import "./Shop.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import kalamansi from "../../assets/kalamansi_Flower_8oz.jpg";
import pandan from "../../assets/pandan_8oz.jpg";
import ubelicious from "../../assets/ubelicious_8oz.jpg";

import flower from "../../assets/flower.png";
import palm from "../../assets/palm.png";

const Shop = () => {
  return (
    <Container className="mt-5">
      <h2 className="arrivals">🐚 NEW ARRIVALS 🐚</h2>
      <p className="new-info"></p>

      <Row>
        <Col>
          <Card className="bg-dark text-white" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={kalamansi} />
            <Card.Body>
              <Card.Title>KALAMANSI FLOWER </Card.Title>
              <Card.Text>
                Scent Profile:
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-dark text-white">
                <img className='scent_icon' src={flower} alt="flower" />
                Calamansi
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={flower} alt="soy" />
                Lime Flowers
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={flower} alt="100% organic" />
                Citrus Leaves
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">link</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="bg-dark text-white" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pandan} />
            <Card.Body>
              <Card.Title>PANDAN</Card.Title>
              <Card.Text>
              Scent Profile:
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={palm} alt="flower" />
                Fresh Pandan Leaves
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={palm} alt="flower" />
                Coconut
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={palm} alt="flower" />
                Vanilla
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">See Details</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="bg-dark text-white" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ubelicious} />
            <Card.Body>
              <Card.Title>UBELICIOUS</Card.Title>
              <Card.Text>
              Scent Profile:
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={palm} alt="palm tree" />
                Sweet Nutty
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={palm} alt="palm tree" />
                Vanilla
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white">
              <img className='scent_icon' src={palm} alt="palm tree" />
                Creamy Coconut
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">See Details</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <Row>
          <Col className='col'>
            <Card className="bg-dark text-white">
              <Card.Img src={pandan} alt="Card image" />
              <Card.Body>
                <Card.Title>Kalamansi Flower</Card.Title>
                <Card.Text>
                  Kalamansi, also known as Calamansi or Philippine Lime, is a citrus fruit native to the Philippines. This fragrance features a refreshing citrusy scent. 
                </Card.Text>
                <Button href="/candles/kalamansi-flower">View Detials</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={kalamansi} alt="Card image" />
              <Card.Body>
                <Card.Title>Kalamansi Flower</Card.Title>
                <Card.Text>
                  Kalamansi, also known as Calamansi or Philippine Lime, is a citrus fruit native to the Philippines. This fragrance features a refreshing citrusy scent. 
                </Card.Text>
                <Button href="/candles/kalamansi-flower">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={kalamansi} alt="Card image" />
              <Card.Body>
                <Card.Title>Kalamansi Flower</Card.Title>
                <Card.Text>
                  Kalamansi, also known as Calamansi or Philippine Lime, is a citrus fruit native to the Philippines. This fragrance features a refreshing citrusy scent. 
                </Card.Text>
                <Button href="/candles/kalamansi-flower">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
    </Container>
  );
};

export default Shop;
