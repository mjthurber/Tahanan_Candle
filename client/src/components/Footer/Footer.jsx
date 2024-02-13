import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Get connected with us on social networks:</span>
            </div>
    
            <div>
              <a href='https://www.instagram.com/tahanan_candle_co/' className='me-4 text-reset'>
                <MDBIcon fab icon="instagram" />
              </a>
              
            </div>
          </section>
    
          <section>
            <MDBContainer style={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }} className='text-center text-md-start mt-5 '>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="fire" className="me-3" />
                    Tahanan Candle Company
                  </h6>
                  <p>
                    Est. 2021??
                  </p>
                </MDBCol>
    
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>INFO LINKS</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Terms & Conditions
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Shipping Policy
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Returns Policy
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>FAQs</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      What?
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Can I?
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help!
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      How?
                    </a>
                  </p>
                </MDBCol>
    
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    Salt Lake City, UT, US
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    contact.us@tahanancandleco.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2021 Copyright:
            <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
              Tahanan Candle Co.
            </a>
          </div>
        </MDBFooter>
      );
    }
    export default Footer;