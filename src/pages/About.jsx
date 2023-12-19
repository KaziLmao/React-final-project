import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header/>
            <div className="main">
                <h2>About us</h2>
                <span>"BlogBridges" - is web application about posts something like forum.</span>
            </div>
            <Footer/>
        </div>
    );
};

export default About;