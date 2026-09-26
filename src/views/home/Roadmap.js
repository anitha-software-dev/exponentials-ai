import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Footer() {
    return (
        <>
            <section id="roadmap" className='bonus-bg'>
                <Container>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className=' mb-0 yel-button text-nowrap px-4 py-2 text-center'>
                            Roadmap
                        </p>
                        <h1 className='text-dark'>Roadmap</h1>

                        <div className='d-flex'>
                            <div class="card road-card" >
                                <div className='road-text'>
                                    <div class="card-body">
                                        <h1>01</h1>
                                        <h3 class="card-title">October 2023</h3>
                                        <p class="card-text">Studio Pass Launch</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={require('../../assets/img/expo-images/road-join-1.png').default} className="img-fluid " />
                            </div>


                            <div class="card road-card" >
                                <div className='road-text'>
                                    <div class="card-body">
                                        <h1>02</h1>
                                        <h3 class="card-title">November 2023</h3>
                                        <p class="card-text">Partner Production Mystery Drops</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={require('../../assets/img/expo-images/road-join-1.png').default} className="img-fluid " />
                            </div>

                            <div class="card road-card" >
                                <div className='road-text'>
                                    <div class="card-body">
                                        <h1>03</h1>
                                        <h3 class="card-title">December 2023</h3>
                                        <p class="card-text">Viral Campaign Launch</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={require('../../assets/img/expo-images/road-join-2.png').default} height={"80%"} width={"80%"} className="img-fluid " />
                        </div>

                        <div className='d-flex'>
                            <div class="card road-card" >
                                <div className='road-text'>
                                    <div class="card-body">
                                        <h1>04</h1>
                                        <h3 class="card-title">December 2023</h3>
                                        <p class="card-text">PR Campaign Launch</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={require('../../assets/img/expo-images/road-join-1.png').default} className="img-fluid " />
                            </div>

                            <div class="card road-card" >
                                <div className='road-text'>
                                    <div class="card-body">
                                        <h1>05</h1>
                                        <h3 class="card-title">December 2023</h3>
                                        <p class="card-text">Backoffice Launch</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={require('../../assets/img/expo-images/road-join-1.png').default} className="img-fluid " />
                            </div>

                            <div class="card road-card" >
                                <div className='road-text'>
                                    <div class="card-body">
                                        <h1>06</h1>
                                        <h3 class="card-title">January 2024</h3>
                                        <p class="card-text">Exponentials Strategy Game Launch</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={require('../../assets/img/expo-images/road-join-2.png').default} height={"80%"} width={"80%"} className="img-fluid " />
                        </div>


                        <div className='d-flex '>
                            <div class="card road-card" >
                                <div className='road-text'>
                                    <div class="card-body">
                                        <h1>07</h1>
                                        <h3 class="card-title">February 2024</h3>
                                        <p class="card-text">AI-Assisted Art Drop</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={require('../../assets/img/expo-images/road-join-1.png').default} className="img-fluid " />
                            </div>
                            <div class="card road-card" >
                                <div className='road-text'>
                                    <div class="card-body">
                                        <h1>08</h1>
                                        <h3 class="card-title">March 2024</h3>
                                        <p class="card-text">IRL Exponential Super conference - Location TBA</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={require('../../assets/img/expo-images/road-join-1.png').default} className="img-fluid " />
                            </div>
                            <div class="card road-card" >
                                <div className='road-text'>
                                    <div class="card-body">
                                        <h1>09</h1>
                                        <h3 class="card-title">May 2024</h3>
                                        <p class="card-text">Exponentials Book Launch</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section >
        </>
    )
}