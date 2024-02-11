import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Row from 'react-bootstrap/Row'
import '../ProductItem/Product.css'

const styles = {
  imgStyle:{
    aspectRatio:"1/1",
    objectFit: "cover!important",
  },
  cardStyle: {
    width:"100%",
    maxWidth: "400px",
    margin: "auto"
  }
}

function ProductList(products) {
  return (
    <div className="my-2">
      <Row>
        {products.products.map((item) => (
          <Col key={item._id} sm={12} className='my-3 col-lg-6 col-md-6'>
            <Card style={styles.cardStyle} className="bg-dark text-white">
                <Card.Img src={`/images/${item.image}`} alt="Candle image" style={styles.imgStyle}/>
              <Card.Body>
                <Card.Title className='my-3'>{item.name}</Card.Title>
                <a href={`/products/${item._id}`}>
                  <Button className='my-3'>View Purchase Options</Button>
                </a>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
}

export default ProductList;
