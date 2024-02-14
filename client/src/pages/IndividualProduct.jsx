import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import Cart from "../components/Cart";
import Nav from "../components/Nav/Navbar";
import { useStoreContext } from "../utils/GlobalState";
import {
  // REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  // ADD_MULTIPLE_TO_CART,
  UPDATE_PRODUCTS,
} from "../utils/actions";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer/Footer";

const styles = {
  imgStyle: {
    maxWidth: "100%",
    border: "5px solid #293F14",
  },
  price: {
    fontWeight: "800",
    fontSize: "24px",
  },
};

function IndividualProduct() {
  const [state, dispatch] = useStoreContext();

  // console.log('add to cart individual product jsx', state);

  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS); //fix why is this different?

  const { products, cart } = state;
  // console.log('products individual product jsx', products);

  useEffect(() => {
    // already in global store
    // if (products.length) {
    //   setCurrentProduct(products.find((product) => product._id === id));
    // }

    if (products.length) {
      //fix
      let product = products.find((product) => product._id === id);
      let item = {
        image: product.image,
        name: product.name,
        _id: product._id,
        price: product.price,
        quantity: product.quantity,
        description: product.description,
        signatureNotes: product.signatureNotes,
        inspiration: product.inspiration,
        pleaseNote: product.pleaseNote
      };

      console.log(item);
      //fix
      
      // setCurrentProduct(products.find((product) => product._id === id));
      setCurrentProduct(item);
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("products", "get").then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    //fix
    console.log("click");
    
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });

      //fix
      console.log({ ...currentProduct });

      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  // const removeFromCart = () => {
  //   dispatch({
  //     type: REMOVE_FROM_CART,
  //     _id: currentProduct._id,
  //   });

  //   idbPromise("cart", "delete", { ...currentProduct });
  // };

  return (
    <>
      {currentProduct && cart ? (
        <div>
          <Nav />
          <a href="/candles" className="m-4">
            <Button className="mx-5 mt-3">Back to Candles</Button>
          </a>
          <Container className="mt-5 p-5 mb-5">
            <Row>
              <Col lg={6} md={12} sm={12}>
                <img
                  style={styles.imgStyle}
                  src={`/images/${currentProduct.image}`}
                  alt={currentProduct.name}
                />
              </Col>
              <Col>
                <h2>{currentProduct.name}</h2>
                <p style={styles.price}>Price: ${currentProduct.price} </p>

                <p>{currentProduct.description}</p>
                <p>{currentProduct.signatureNotes}</p>
                <p>{currentProduct.inspiration}</p>
                <p>**{currentProduct.pleaseNote}**</p>
                <Button className="my-3" onClick={addToCart}>
                  🛒 Add to Cart
                </Button>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      ) : null}
      {loading ? <div>Loading...</div> : null}
    </>
  );
}

export default IndividualProduct;
