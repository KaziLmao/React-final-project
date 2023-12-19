import React from 'react';
import '../styles/NotFound.css';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="four-zero-four-container">
            <h1 className="text-center ">404</h1>
            <div className="four-zero-four-bg">
            </div>
            <h3 className="h2">
                Hmm it looks like you're lost
            </h3>
            <p>the page you are looking for is not avaible!</p>
            <Link to="/" class="link_404">Go to Home</Link>
        </div>
    );
};

export default NotFoundPage;