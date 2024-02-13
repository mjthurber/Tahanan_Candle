import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import cart_icon from "../../assets/cart_icon5.png";
import './style.css';


// stripePromise returns a promise with the stripe object as soon as the Stripe package loads
const stripePromise = loadStripe('pk_test_51OgyJGJSv89w4eKZqvrWn510xufvVIMZlJaRMQGq51tuCXAGdk4w9z6WAx3lF1KNea7AnkTbdMaC4FCQuFcMoihl00WeeJLyrO');

const Cart = () => {
  const [state, dispatch] = useStoreContext();

  // console.log('cart index jsx', state);
  // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const [getCheckout, { loading, data }] = useLazyQuery(QUERY_CHECKOUT, {
    onCompleted: (data) => {
      console.log('data:', data)
    },
  })

  useEffect(() => {
    if (loading) {
      console.log("loading")
    }
    else {
      console.log("not loading")
      console.log(data)
    }
  }, [loading, data]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }


  function submitCheckout() {
    console.log("submitCheckout")
    console.log(state.cart)

    getCheckout({
      variables: { 
        products: [...state.cart],
      },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <img src={cart_icon} alt="cart"/>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        X
      </div>
      <h2>Your Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong style={{padding: "2%"}}>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;