import Nav from '../components/Nav/Navbar';
import wave from '../assets/signup-hi.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
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
    <MDBContainer className='sign' style={{margin: "auto", textAlign: "center", width: "98%", padding: "2%"}}>

          <MDBCard className="text-black" style={{ borderRadius: '25px', width: "100%", maxWidth: "700px", margin: "auto" }}>
              <MDBCardBody>
                  <MDBRow>
                      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create an account</p>

                          <div className="d-flex flex-row align-items-center mb-4 ">
                              <MDBIcon fas icon="user me-3" size='lg' />
                              <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={handleChange}/>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                              <MDBIcon fas icon="envelope me-3" size='lg' />
                              <MDBInput label='Your Email' id='form2' type='email' onChange={handleChange}/>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                              <MDBIcon fas icon="lock me-3" size='lg' />
                              <MDBInput label='Password' id='form3' type='password' onChange={handleChange}/>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                              <MDBIcon fas icon="key me-3" size='lg' />
                              <MDBInput label='Repeat your password' id='form4' type='password' onChange={handleChange}/>
                          </div>

                          <div className='mb-4'>
                              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                          </div>

                          <MDBBtn className='mb-4' size='lg' onSubmit={handleFormSubmit}>Register</MDBBtn>

                      </MDBCol>

                      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                          <MDBCardImage src={wave} fluid />
                      </MDBCol>

                  </MDBRow>
              </MDBCardBody>
          </MDBCard>

      </MDBContainer>
      </>
  );
}

export default Signup;
