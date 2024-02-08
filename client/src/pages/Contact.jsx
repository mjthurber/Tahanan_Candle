import React from "react";
import Header from '../components/Header/Header';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';

import "./contact.css";

const Contact = () => {
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY);
    }
    return (
        <>
            <Header pageName={"Contact Us"} />
            <main className="contact-page">
                <p className="info">Please feel free to contact us about any questions or concerns you may have. You can email us at <b>TahananCandle@gmail.com</b> or fill out our contact form below:</p>
                <form className="shadow-sm mb-5 rounded" id="contact-form" onSubmit={sendEmail}>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault01">Your Name</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Your name" required name="from_name"/>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Email Address</label>
                        <input type="email" className="form-control" id="validationDefault02" placeholder="Enter email" required name="email_from"/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault03">Subject</label>
                        <input type="text" className="form-control" id="validationDefault03" placeholder="Subject" name="subject"/>
                    </div>

                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault04">Your Message</label>
                        <textarea type="text-area" className="form-control" id="validationDefault04" placeholder="Your Message" required name="message"/>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </main>

        </>

    );
};

export default Contact;
