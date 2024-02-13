import React from "react";
import Nav from '../components/Nav/Navbar'
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container'

import "./bundles.css";


const ShopBundle = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_BULK_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY);
        alert("Your request has been sent!")
        let frm = document.getElementById('bundle-form');
        frm.reset();
    }

    return (
        <>
            <Nav />
            <main className="bundle-page">
                <Container className='mt-5'>
                    <form id="bundle-form" onSubmit={sendEmail}>
                        <h4>Bulk/Event Order Form Request</h4>
                        <p className="info">Please fill out your contact and shipping information and provide a message regarding your bulk order request below:</p>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault01">Your Name</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Your name" required name="from_name" />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault02">Email Address</label>
                            <input type="email" className="form-control" id="validationDefault02" placeholder="Enter email" required name="email_from" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault03">Event Type</label>
                            <input type="text" className="form-control" id="validationDefault03" placeholder="Wedding, Birthday, Anniversary" name="event_type" required/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault04">Qty Needed</label>
                            <input type="number" className="form-control" id="validationDefault04" placeholder="10" min="10" name="qty_needed" required/>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault05">Your Message/Order Details</label>
                            <textarea type="text-area" className="form-control" id="validationDefault05" placeholder="Your Message" required name="message" />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault06">Your Shipping Address</label>
                            <input type="text" className="form-control" id="validationDefault06" placeholder="1234 Main St" name="address" required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault07">Country</label>
                            <input type="text" className="form-control" id="validationDefault07" placeholder="United States" name="country" required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault08">State</label>
                            <input type="text" className="form-control" id="validationDefault08" placeholder="Utah" name="state" required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault09">Zip/Postal Code</label>
                            <input type="number" className="form-control" id="validationDefault09" placeholder="84663" name="zipcode" required />
                        </div>
                        <Button variant="light" type="submit">Submit</Button>
                    </form>
                </Container>

            </main>

        </>

    );
};

export default ShopBundle;
