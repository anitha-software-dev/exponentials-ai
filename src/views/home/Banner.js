import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
import { Row, Col, Input } from "reactstrap"

const Banner = () => {
    return (
        <>
            <div className='banner-bg '>
                <section className='py-0'>
                    <IndexNavbar />
                </section>
                <section>
                    <div className='container'>

                        <Row className=''>
                            <Col lg="6" >
                                <div className='d-flex flex-column align-items-left justify-content-left ban-text'>
                                    <h1>
                                        Exponentials A.I.
                                    </h1>
                                    <h1>
                                        Gold & Silver
                                    </h1>
                                    <h1>
                                        Membership NFTs
                                    </h1>
                                    <p>
                                        Empowering Entrepreneurs and Businesses with AI Expertise to Drive Exponential Growth and Success
                                    </p>
                                    <ul className='mt-3 ban-list'>
                                        <li className='text-white'>Then can you just have the yellow button and “Join the Allowlist”</li>
                                        <li className='text-white'>And can you delete the circle with the arrow and “Grow Exponentially...</li>
                                        <li className='text-white'>Add Gold and Silver Passes (First draft for now)</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg="6" className='d-flex align-items-center justify-content-center '>
                                <img src={require('../../assets/img/expo-images/banner-img.png').default} height={"100%"} width={"100%"} className="img-fluid " />
                            </Col>

                        </Row>
                    </div>
                </section>

            </div >

        </>
    )
}

export default Banner