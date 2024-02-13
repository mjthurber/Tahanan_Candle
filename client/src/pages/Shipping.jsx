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
                <p>Orders are generally shipped within  3-5 days using the United States Postal Service. Priority Mail shipping fee of $9.35. Business days do not include weekends or holidays. For example, if you drop off your package at a USPS location on a Monday, you can expect it to be processed and shipped by Wednesday or Thursday, depending on the volume of mail and the specific USPS location.</p>
                <h3>​​DOMESTIC SHIPPING RATES AND ESTIMATES:</h3>
                <p>Economy, Free shipping on all orders</p>
                <h3>REFUNDS AND EXCHANGES</h3>
                <p>In the event that your order arrives damaged in any way, please email us as soon as possible at TahananCandle@gmail.com with your order number and a photo of the item’s condition. We address these on a case-by-case basis but will try our best to work towards a satisfactory solution.</p>
                <p>If you have any further questions, please don't hesitate to contact us at TahananCandle@gmail.com</p>
            </Container>
        </div>
    )
}
export default Shipping;