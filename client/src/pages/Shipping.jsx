import React from 'react';
import Nav from '../components/Nav/Navbar';
import Container from 'react-bootstrap/Container';

const Shipping = () => {
    return(
        <div>
            <Nav/>
            <Container>
                <h2>Tahanan Candle Co. Shipping Policy</h2>
                <h3>ORDER PROCESSING:</h3>
                <p>Please allow 3-5 days to process your order. Expect an email within 3-5 days to let you know your order is on the way!</p>
                <p>STORE PICKUP - Will be available soon</p>
                <p>LOCAL DELIVERY - Will be available soon</p>
                <h3>PRIORITY MAIL SHIPPING</h3>
                <p>Orders are generally shipped within  3-5 days using the United States Postal Service.Priority Mail shipping fee of $9.35. Business days do not include weekends or holidays. For example, if you drop off your package at a USPS location on a Monday, you can expect it to be processed and shipped by Wednesday or Thursday, depending on the volume of mail and the specific USPS location.</p>
            </Container>
        </div>
    )
}
export default Shipping;