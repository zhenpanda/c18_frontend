import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import $ from 'jquery';

import '../assets/css/home.css';
import splashHero from '../assets/images/splashHero.png';

class Home extends Component {

  render() {
    return (
            <div className="home-background">
            <div className="home-background-color">
                <div className="home-splash-block">
                    <img className="home-splash-img z-depth-3" src={splashHero} alt="" />
                </div>
                <div className="home-splash-text">Tracking food shipments on the BlockChain</div>
                <div className="login-btn-block">
                    <div className="btn login-btn btn-large cyan darken-1">Start Tracking</div>
                </div>
            </div>
            </div>
        )
    }
}
export default Home;