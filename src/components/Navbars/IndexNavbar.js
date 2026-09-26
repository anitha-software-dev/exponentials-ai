
import React from "react";
import { Link } from "react-router-dom";
import { AnchorScroll } from "helper";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa'

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");

  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  return (
    <div className=" pt-5 container">
      <div className="nav-border ">
        <Navbar expand="xl" className="py-0 mx-3">
          <Row className="w-100">
            <Col lg="12" xl="2" className="px-0 px-xl-3">
              <div className="d-flex w-100 justify-content-between align-items-center">

                <NavbarBrand to="/" tag={Link} id="navbar-brand" onClick={() => AnchorScroll()}>
                  <div className="d-flex align-items-center justify-content-center">
                    <img src={require('../../assets/img/expo-images/nav-logo.png').default} className="img-fluid " />
                  </div>
                </NavbarBrand>

                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <FiMenu className="text-dark" size="24" />
                </button>
              </div>
            </Col>
            <Col lg="8" xl="10" className="pr-0 d-flex justify-content-end">
              <Collapse
                className={"ml-4 bg-black justify-content-end justify-content-lg-between align-items-center" + collapseOut}
                navbar
                isOpen={collapseOpen}
                onExiting={onCollapseExiting}
                onExited={onCollapseExited}
              >

                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-close" xs="6">
                      <button
                        aria-expanded={collapseOpen}
                        className="navbar-toggler"
                        onClick={toggleCollapse}
                      >
                        <FaTimes className="pf-text-secondary" color="white" size="24" />
                      </button>

                    </Col>
                  </Row>
                </div>

                <div className="d-flex w-100 justify-content-between align-items-center">
                  <div className="d-flex flex-column flex-xl-row w-100 justify-content-between align-items-center">
                    <Nav navbar className="nav-text-size">
                      <NavItem className="d-flex justify-content-center align-items-center">
                        <NavLink
                          data-placement="bottom"
                          rel="noopener noreferrer"
                        >
                          <a href="/" className="mr-2" >Home</a>
                        </NavLink>
                      </NavItem>

                      <NavItem className="d-flex justify-content-center align-items-center">
                        <NavLink
                          data-placement="bottom"
                          rel="noopener noreferrer"
                        >
                          <a href="/#about" className="mr-2 text-nowrap">About Us</a>
                        </NavLink>
                      </NavItem>

                      <NavItem className="d-flex justify-content-center align-items-center">
                        <NavLink
                          data-placement="bottom"
                          rel="noopener noreferrer"
                        >
                          <a href="/#benefits" className="mr-2" >Benefits</a>
                        </NavLink>
                      </NavItem>

                      <NavItem className="d-flex justify-content-center align-items-center">
                        <NavLink
                          data-placement="bottom"
                          rel="noopener noreferrer"
                        >
                          <a href="/#roadmap" className="mr-2" >Roadmap</a>
                        </NavLink>
                      </NavItem>

                      <NavItem className="d-flex justify-content-center align-items-center">
                        <NavLink
                          data-placement="bottom"
                          rel="noopener noreferrer"
                        >
                          <a href="/#faq" className="mr-2" >FAQ's</a>
                        </NavLink>
                      </NavItem>

                      <NavItem className="d-flex justify-content-center align-items-center">
                        <NavLink
                          data-placement="bottom"
                          rel="noopener noreferrer"
                        >
                          <a href="/#testimonials" className="mr-2" >Testimonials</a>
                        </NavLink>

                      </NavItem>
                      <div className="nav-button text-nowrap ml-4">
                        <div className="nav-text-size py-1 px-3 ">Contact Us<span><img src={require('../../assets/img/expo-images/nav-button.png').default} height={35} width={35} className="img-fluid ml-3" /></span>
                        </div>
                      </div>
                    </Nav>

                  </div>

                </div>
              </Collapse>
            </Col>
          </Row>
        </Navbar>
      </div>
    </div >
  );
}
