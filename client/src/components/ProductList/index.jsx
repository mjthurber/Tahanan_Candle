import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import kalamansi from '../../assets/owner.jpg'

function ProductList(prop) {
  console.log(prop);
  console.log(prop.data.products);
  const products = prop.data.products;
  return (
    <div className="my-2">
      {products?.map((item) => (
        <Col key={item._id}>
          <Card className="bg-dark text-white">
            <Card.Img src={item.image} alt="Candle image" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description} 
              </Card.Text>
              <Button>View Purchase Options</Button>
            </Card.Body>
          </Card>
        </Col>
        
      ))}
                {/* <Col>
            <Card className="bg-dark text-white">
              <Card.Img src={kalamansi} alt="Card image" />
              <Card.Body>
                <Card.Title>Kalamansi Flower</Card.Title>
                <Card.Text>
                  Kalamansi, also known as Calamansi or Philippine Lime, is a citrus fruit native to the Philippines. This fragrance features a refreshing citrusy scent. 
                </Card.Text>
                <Button>View Purchase Options</Button>
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
                <Button>View Purchase Options</Button>
              </Card.Body>
            </Card>
          </Col> */}

    </div>
  );
}

export default ProductList;
