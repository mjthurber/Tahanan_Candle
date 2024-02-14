import React from 'react';
import Nav from '../components/Nav/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer/Footer';

const Returns = () => {
    return(
        <>
        <div style={{minHeight: "100vh"}}>
            <Nav/>
            <Container className='mt-3'>
                <h2>Tahanan Candle Co. Return Policy</h2>
                <p>At Tahanan Candle Co., we take pride in crafting high-quality scented candles that bring joy to your life. Your satisfaction is our top priority, and we stand by the quality of our products. Due to the nature of our products, used candles cannot be returned or refunded. However, for defective or damaged products, please contact us at TahananCandle@gmail.com to arrange a refund or exchange. </p>
                <p>You can always contact us for any question at TahananCandle@gmail.com</p>
                <h3>Damages and Issues</h3>
                <p>
                    Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
                </p>
            </Container>
        </div>
        <Footer />
        </>
    )
}
export default Returns;