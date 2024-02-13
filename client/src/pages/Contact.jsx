import React from "react";
import Nav from '../components/Nav/Navbar'
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/Container'
import Footer from "../components/Footer/Footer";


import "./contact.css";


const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY);
        alert("Your message has been sent!")
        let frm = document.getElementById('contact-form');
        frm.reset();
    }

    return (
        <>
            <Nav />
            <main className="contact-page">
                <Container className='mt-5'>
                    <form id="contact-form" onSubmit={sendEmail}>
                        <h4>Contact Form</h4>
                        <p className="info">Please feel free to contact us about any questions or concerns you may have. You can email us directly at <b>contact.us@tahanancandleco.com</b> or fill out our form below:</p>


                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault01">Your Name</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Your name" required name="from_name" />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault02">Email Address</label>
                            <input type="email" className="form-control" id="validationDefault02" placeholder="Enter email" required name="email_from" />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault03">Subject</label>
                            <input type="text" className="form-control" id="validationDefault03" placeholder="Subject" name="subject" />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="validationDefault04">Your Message</label>
                            <textarea type="text-area" className="form-control" id="validationDefault04" placeholder="Your Message" required name="message" />
                        </div>
                        <Button variant="light" type="submit">Submit</Button>
                    </form>
                </Container>

            </main>
            <Footer/>
        </>

    );
};

export default Contact;
