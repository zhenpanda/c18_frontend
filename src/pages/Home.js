import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import $ from 'jquery';

import '../assets/css/home.css';
import splashHero from '../assets/images/splashHero.png';

class Home extends Component {

  render() {
    return (
            <div className="home-page">
                <img src={splashHero} alt="" />
            </div>
        )
    }
}
export default Home;