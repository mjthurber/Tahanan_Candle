import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
          <MDBContainer className='p-4'>
            <MDBRow>
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Privacy Policy</h5>
    
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='link-success'>
                      "This Privacy Policy describes how TahananCandleCo..."
                    </a>
                  </li>
                </ul>
              </MDBCol>
    
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase mb-0'>Terms & Conditions</h5>
    
                <ul className='list-unstyled'>
                  <li>
                    <a href='#!' className='link-success'>
                      "Please read these Terms of Service carefully before..."
                    </a>
                  </li>
                </ul>
              </MDBCol>
    
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Shipping Policy</h5>
    
                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='link-success'>
                      "Please allow 3-5 days to process your order..."
                    </a>
                  </li>
                </ul>
              </MDBCol>
    
              <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase mb-0'>Return Policy</h5>
    
                <ul className='list-unstyled'>
                  <li>
                    <a href='#!' className='link-success'>
                    "You can always contact us for any question at..."
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className='text-dark' href=''>
            TahananCandleCo.
            </a>
          </div>
        </MDBFooter>
      );
    }

    export default Footer;