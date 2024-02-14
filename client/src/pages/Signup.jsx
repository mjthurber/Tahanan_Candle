import Nav from "../components/Nav/Navbar";
import wave from "../assets/signup-hi.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import "./signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer/Footer';


import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBCheckbox,
} from "mdb-react-ui-kit";

function Signup(props) {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await addUser({
                variables: {
                    email: formState.email,
                    password: formState.password,
                    firstName: formState.firstName,
                    lastName: formState.lastName,
                },
            });
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);

            // Show success notification
            toast('Signup successful!', {
                position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
              });
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error signing up, maybe show an error notification
            toast('Error signing up', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <>
            <Nav />
            <MDBContainer
                className="sign"
                style={{
                    margin: "auto",
                    textAlign: "center",
                    width: "98%",
                    padding: "2%",
                }}
            >
                <MDBCard
                    className="text-black"
                    style={{
                        borderRadius: "25px",
                        width: "100%",
                        maxWidth: "900px",
                        margin: "auto",
                        padding: "2%",
                    }}
                >
                    <Link to="/login" className="text-black">
                        ← Have an account already? <br></br> Go to Login
                    </Link>

                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol
                                md="10"
                                lg="6"
                                className="order-2 order-lg-1 d-flex flex-column align-items-center"
                            >
                                <form onSubmit={handleFormSubmit}>
                                    <div className="signup-divs flex-row space-between my-2">
                                        <label htmlFor="firstName">First Name:</label>
                                        <MDBInput
                                            name="firstName"
                                            id="firstName"
                                            className="w-100"
                                            type="firstName"
                                            placeholder="First Name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="signup-divs flex-row space-between my-2">
                                        <label htmlFor="lastName">Last Name:</label>
                                        <MDBInput
                                            name="lastName"
                                            id="lastName"
                                            className="w-100"
                                            type="lastName"
                                            placeholder="Last Name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="signup-divs flex-row space-between my-2">
                                        <label htmlFor="email">Email:</label>
                                        <MDBInput
                                            name="email"
                                            id="email"
                                            className="w-100"
                                            type="email"
                                            placeholder="youremail@test.com"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="signup-divs flex-row space-between my-2">
                                        <label htmlFor="pwd">Password:</label>
                                        <MDBInput
                                            name="password"
                                            id="pwd"
                                            className="w-100"
                                            type="password"
                                            placeholder="******"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <MDBCheckbox
                                            name="flexCheck"
                                            value=""
                                            id="flexCheckDefault"
                                            label="Subscribe to our newsletter"
                                        />
                                    </div>

                                    <div className="flex-row flex-end">
                                        <a
                                            href="mailto:contact.us@tahanancandleco.com"
                                            className="p-0"
                                        ></a>
                                        <MDBBtn
                                            className="mb-4"
                                            size="lg"
                                        >
                                            Register
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>

                            <MDBCol
                                md="10"
                                lg="6"
                                className="order-1 order-lg-2 d-flex align-items-center"
                            >
                                <MDBCardImage src={wave} fluid />
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
                <ToastContainer />
            </MDBContainer>
            <Footer />
        </>
    );
}

export default Signup;
