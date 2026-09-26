import React from 'react'
import { Col, Row } from 'reactstrap'
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
]


const NFTcollection = () => {
    return (
        <section data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" id="nfts">
            <Row className=" mt-4  ">
                <Carousel enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints}>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft1.jpg").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft2.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft3.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft4.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft5.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft1.jpg").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft2.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft3.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft4.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft5.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                </Carousel>
            </Row>

            <Row className="mt-4  ">
                <Carousel enableAutoPlay autoPlaySpeed={1000} breakPoints={breakPoints}>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft6.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft7.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft8.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft9.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft6.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft7.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft8.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center" >
                        <img src={require("../../assets/img/Cowboy_images/nft9.png").default} alt="img" className="img-fluid px-2" />
                    </div>
                </Carousel>
            </Row>

        </section>
    )
}

export default NFTcollection