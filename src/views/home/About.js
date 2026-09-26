
import React from 'react';
import { Row, Col } from "reactstrap"

const About = () => {

    return (
        <section id="about" className='about-bg ' >
            <div className='container about-text'>
                <div className='d-flex'>
                    {/* <div className=' d-flex flex-column text-nowrap align-items-center justify-content-center'>
                        <h5 className='text-dark'>Our Team Has</h5>
                        <h5 className='text-dark'>Worked With:</h5>
                    </div> */}

                    <img src={require('../../assets/img/expo-images/sec-navbar.png').default} height={"100%"} width={"100%"} className="img-fluid " />
                </div>

                <Row className='pt-5 mt-5'>

                    <Col xl="6" lg="12">

                        <p className='yel-button text-nowrap px-4 py-2'>
                            About Us
                        </p>

                        <h1 className='mb-2'>
                            Unlocking the Future of
                        </h1>
                        <h1 className='mb-2'>
                            Business with Cutting-
                        </h1>
                        <h1 className='mb-2'>
                            Edge AI Expertise and
                        </h1>
                        <h1 className='mb-2'>
                            Exponential Growth
                        </h1>
                        <h1 className='mb-2'>
                            Strategies
                        </h1>

                    </Col>
                    <Col xl="6" lg="12" >
                        <p >
                            Join our vibrant Exponentials A.I. community today and embark on a transformative journey in the realm of artificial intelligence, business mastery, and exponential growth. With our Silver or Gold pass, you'll gain exclusive access to a treasure trove of knowledge and opportunities.
                        </p>
                        <p className='mt-3'>
                            From our immersive 12-week Business Mastermind course to one-on-one sessions with our founder, you'll be armed with the insights and strategies needed to thrive in the AI-driven landscape. Dive into our Discord community, where you'll connect with like-minded entrepreneurs, gain priority access to AI-trained expert bots, and participate in live expert calls.
                        </p>
                        <p className='mt-3'>
                            Don't miss out on our IRL events, giving you an opportunity to network and learn from the best in the field. Plus, as an Exponentials A.I. community member, you'll receive special perks like early access to our projects and so much more. The future of business awaits, and it starts right here.
                        </p>
                    </Col>
                </Row>

                <Row className='pt-5 mt-5'>
                    <Col lg="6">
                        <img src={require('../../assets/img/expo-images/join-img.png').default} height={"100%"} width={"100%"} className="img-fluid " />

                    </Col>
                    <Col lg="6">
                        <h4 className='ff-bold'>How to Join</h4>
                        <div className='d-flex'>
                            <img src={require('../../assets/img/expo-images/join-count.png').default} height={"10%"} width={"80%"} className="img-fluid " />

                            {/* <div className="timeline">
                                {events.map((event) => (
                                    <div key={event.id} className="timeline-event">
                                        <div className="event-date text-dark">{event.date}</div>
                                    </div>
                                ))}
                            </div> */}

                            <div className='ml-5'>
                                <p>Join our Allowlist: Ensure you're on our allowlist to get early access and stay updated on all things Exponentials A.I. This is your first step toward unlocking the future of business.</p>
                                <p className='mt-3'>
                                    Join the Exponentials A.I. Discord and Follow our Twitter: Connect with our community on Discord, where you'll engage with fellow entrepreneurs and gain access to exclusive insights. Follow us on Twitter for real-time updates and announcements.
                                </p>
                                <p className='mt-3'>
                                    Mint your Gold or Silver A.I. Pass the day of launch: When launch day arrives, don't miss your chance to mint your Gold or Silver A.I. Pass. This is your ticket to an array of benefits, from our 12-week Business Mastermind course to priority access at IRL events.
                                </p>
                                <p className='mt-3'>
                                    Get ready for Exponential Growth from courses, networking at IRL events, and tools you won't find anywhere else!: As a member of Exponentials A.I., you're on a journey to exponential growth. Dive into our courses, connect with industry leaders at our IRL events, and harness exclusive tools that will propel your business into the future. Welcome to the world of unlimited possibilities!
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        </section >
    )
}

export default About