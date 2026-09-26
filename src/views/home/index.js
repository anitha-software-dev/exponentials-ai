import React from "react";

import Banner from "./Banner";
import About from "./About";
import Benefits from "./Benefits";
import Roadmap from "./Roadmap";
import FAQ from "./FAQ";
import Footer from "components/Footer/Footer";

const Home = () => {
    return (
        <>
            <div className="">
                <Banner />
                <About />
                <Benefits />
                <Roadmap />
                <FAQ />
                <Footer />
            </div>
        </>
    )
}

export default Home