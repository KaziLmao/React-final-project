import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Landing = () => {
    return (
        <div>
            <Header/>
            <div className="main">
                <h2>Welcome to BlogBridges</h2>
                <span>Here you can share your news</span>
            </div>
            <Footer/>
        </div>
    );
};

export default Landing;