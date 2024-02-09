import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import kalamansi from '../../assets/owner.jpg'
import Row from 'react-bootstrap/Row'
import '../ProductItem/Product.css'

function ProductList(products) {
  console.log(products)
  console.log(products.products)
  
  return (
    <div className="my-2">
      <Row>
        {products.products.map((item) => (
          <Col lg={true} key={item._id} className='m-1'>
            <Card className="bg-dark text-white">
              <Card.Img src={`/images/${item.image}`} alt="Candle image" />
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
      </Row>

    </div>
  );
}

export default ProductList;
