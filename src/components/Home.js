import React from 'react';
import { Link  } from 'react-router-dom';

import Logo from '../assets/logo.svg';

const Home = () => {
    return(
        <div className="container">
            <img className="logo" src={Logo} alt="logo" />
            <h1 className="title mt-1">Welcome to your healthcare assessment portal!</h1>
            <h2>Are you a</h2>
            <Link to="/questionnaire" className="btn-link mt-1">Patient</Link>
            <Link to="/" className="btn-link mt-1">Provider</Link>
        </div>
    );
}

export default Home;