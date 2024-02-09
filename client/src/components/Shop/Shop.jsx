import React from 'react'
import './Shop.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';

import kalamansi from '../../assets/kalamansi_Flower_8oz.jpg'
import pandan from '../../assets/pandan_8oz.jpg'
import ubelicious from '../../assets/ubelicious_8oz.jpg'

const Shop = () => {
  return (
    <Container className='mt-5'>
        <h2 className="arrivals" >🐚 N E W     A R R I V A L S 🐚</h2>
        <p className='new-info'>Our candle fragrances were inspired by the rich aromas of tropical blooms, exotic fruits, and the essence of Filipino culture. Each candle comes in an 8oz. and 12oz. size. Bring a touch of the Philippines into your home today.</p>
        
<Row>
  <Col>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={kalamansi} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pandan} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ubelicious} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
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

  )
}

export default Shop;