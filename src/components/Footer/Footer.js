/*!

=========================================================
* exponentials - v1.0.0
=========================================================
* Coded by Ecrubit
*/
import React from "react";
// reactstrap components
import {
  Row,
  Col, Container
} from "reactstrap";

export default function Footer() {
  return (
    <>
      <div className="foot-bg">
        <Container >
          <Row className="d-flex justify-content-between mt-5 mt-lg-0 pt-5 foot-text ">
            <Col md="5" lg="5" className="align-items-center justify-content-center pt-5 mt-5 mt-lg-0 pt-lg-0">
              <div className="foot-text text-center text-lg-left">
                <img src={require('../../assets/img/expo-images/foot-logo.png').default} className="img-fluid" height={"50%"} width={"50%"} />
              </div>

              <div className="d-flex mt-3">
                <div className="d-flex align-items-center mr-5 pr-4">
                  <a href="/#home" >
                    <p >
                      Home
                    </p>
                  </a>
                </div>
                <div className="d-flex align-items-center mr-5 text-nowrap">
                  <a href="/#about">
                    <p>
                      About Us
                    </p>
                  </a>
                </div>
                <div className="d-flex align-items-center mr-5 ">
                  <a href="/#benefits" >
                    <p>
                      Benefits
                    </p>
                  </a>
                </div>
              </div>

              <div className="d-flex mt-3">
                <div className="d-flex align-items-center mr-5 pr-2">
                  <a href="/#roadmap" >
                    <p>
                      Roadmap
                    </p>
                  </a>
                </div>
                <div className="d-flex align-items-center mr-5 pr-4">
                  <a href="/#faq">
                    <p>
                      FAQ
                    </p>
                  </a>
                </div>
                <div className="d-flex align-items-center mr-5 ">
                  <a href="/#testimonials" >
                    <p>
                      Testimonials
                    </p>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="3" lg="3" className="text-left mt-3">
              <h4>Contact Info</h4>
              <p className="mt-4">123-456-78910</p>
              <p className="mt-4">info@exponentialsai.com</p>
            </Col>
            <Col md="2" lg="2" className="text-left mt-3">
              <h4>Follow Us</h4>
              <p className="mt-4">Twitter</p>
              <p className="mt-4">Facebook</p>
            </Col>
            <Col md="2" lg="2" className="text-center">
              <img src={require('../../assets/img/expo-images/back-to-top.png').default} className="img-fluid" height={"100%"} width={"100%"} />
            </Col>
          </Row>

          <Row className="py-4 foot-text border-footer">
            <Col lg="12" className=" d-flex justify-content-center align-items-center ">
              <h6 className="mb-0">© Copyright | Exponentials A.I. 2023</h6>
            </Col>
          </Row>

        </Container>
      </div >
    </>
  );
}
