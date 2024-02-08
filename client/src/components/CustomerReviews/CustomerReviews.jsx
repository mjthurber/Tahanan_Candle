import React from 'react'
import './CustomerReviews.css'
import pitt from '../../assets/pitt.jpg'

import {
    MDBCarousel,
    MDBCarouselItem,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
  } from "mdb-react-ui-kit";

const CustomerReviews = () => {
  return (
          <MDBContainer className="my-5">
            <MDBCarousel showControls dark>
              <div className="review">
                <MDBCarouselItem className="active text-center">
                  <img
                    src={pitt}
                    alt="avatar"
                    className="rounded-circle shadow-1-strong mb-4"
                    style={{ width: "150px" }}
                  />
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="8">
                      <h5 className="mb-3">Britt Young</h5>
                      <p>"Item Ordered Here"</p>
                      <p className="text-muted">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Absolutely LOVE the candles I recieved! They smell amazing and the packaging is so cute! I will definitely be ordering more in the future!
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon far icon="star" size="sm" />
                    </li>
                  </ul>
                </MDBCarouselItem>
      
                <MDBCarouselItem className="text-center">
                  <img
                    src={pitt}
                    alt="avatar"
                    className="rounded-circle shadow-1-strong mb-4"
                    style={{ width: "150px" }}
                  />
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="8">
                      <h5 className="mb-3">John Doe</h5>
                      <p>"Item ordered here"</p>
                      <p className="text-muted">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Jez was so helpful and kind when I reached out to her with questions about my order and the candles are more amazing than I could have imagined.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon far icon="star" size="sm" />
                    </li>
                  </ul>
                </MDBCarouselItem>
      
                <MDBCarouselItem className="text-center">
                  <img
                    src={pitt}
                    alt="avatar"
                    className="rounded-circle shadow-1-strong mb-4"
                    style={{ width: "150px" }}
                  />
                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol lg="8">
                      <h5 className="mb-3">Anna Deynah</h5>
                      <p>Web Developer</p>
                      <p className="text-muted">
                        <MDBIcon fas icon="quote-left" className="pe-2" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                        et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                        quibusdam illo, beatae quia fugit consequatur laudantium velit
                        magnam error. Consectetur distinctio fugit doloremque.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon fas icon="star" size="sm" />
                    </li>
                    <li>
                      <MDBIcon far icon="star" size="sm" />
                    </li>
                  </ul>
                </MDBCarouselItem>
                </div>
            </MDBCarousel>
          </MDBContainer>
        );
      }
      

export default CustomerReviews;