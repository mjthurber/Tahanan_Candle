import { Link } from 'react-router-dom';
import Nav from '../components/Nav/Navbar'

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import './orderHistory.css';
import '../components/ProductItem/';
import Footer from '../components/Footer/Footer';



const styles = {
    imgStyle: {
        aspectRatio: "1/1",
        objectFit: "cover!important",
    }
};

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
      <>
          <Nav/>
      <div className="container my-1">

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="order-cards">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card bg-dark text-white purchase-item">
                      <Link to={`/products/${_id}`} className='text-white'>
                        <img alt={name} src={`/images/${image}`} className='historyImage' style={styles.imgStyle}/>
                        <p>{name}</p>
                      </Link>
                      <div>
                        <div className='price'>${price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
      <Footer />
    </>
  );
}

export default OrderHistory;
