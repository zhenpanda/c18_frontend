import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BlockChain from '../components/Blockchain';

import greenfarmImg from '../assets/images/greenfarm_logo.png';
import "../assets/css/greenfarm.css";

import $ from 'jquery';
import '../../node_modules/materialize-css';

class GreenFarm extends Component {

    state = {stage: null}

    displayBlock() {
        if(this.state.stage === null) {
            return(
                <BlockChain />
            )
        }else if(this.state.stage === "greenfarm"){
            return(
                <BlockChain 
                    stage="greenfarm" 
                    time="1234"
                />
            )
        }
    }
    changeChange() {
        this.setState({stage: "greenfarm"});
    }

    render() {

        return(
            <div className="greenfarm-bg">
                {/* greenfarm main section */}

                {/* greenfarm area */}
                <div className="row">
                    <div className="col s3 m3" />
                    <div className="col s9 m9">
                        <div className="row">
                            <div className="col s11 m11">
                                <div className="greenfarm-section moveFromRightFade z-depth-3">

                                    {/* greenfarm header */}
                                    <div className="row clean-row">
                                        <div className="col s3 m3 clean-row moveFromTopFade delay500">
                                            <div className="greenfarm-header-left-tile" />
                                            <div className="greenfarm-header-left-block">
                                                <img src={greenfarmImg} alt="" className="greenfarm-header-img z-depth-1" />
                                            </div>
                                        </div>
                                        <div className="col s9 m9 clean-row moveFromTopFade delay500">
                                            <div className="greenfarm-header-right-tile" />
                                            <div className="greenfarm-header-right-block">
                                                <div className="greenfarm-title-text">GREENFARM</div>
                                                <div className="greenfarm-mid-text"> [ Wholesale Greenmarket. Facility ] </div>
                                                <div className="greenfarm-bot-text">Order Tracking System:</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* greenfarm body */}
                                    <div className="row clean-row">
                                        
                                        <div className="col s3 m3 clean-row moveFromBottomFade delay600">
                                            <div className="greenfarm-body-left-block">
                                                <div className="btn test-btn" onClick={() => this.changeChange()}>Test</div>
                                            </div>
                                        </div>

                                        <div className="col s9 m9 clean-row">
                                            
                                            <div className="greenfarm-body-right-block">
                                                <div className="row">
                                                    <div className="col s12 m12">
                                                        <div className="file-field input-field">
                                                            <div className="btn orange">
                                                                <span>File</span>
                                                                <input type="file" />
                                                            </div>
                                                            <div className="file-path-wrapper">
                                                                <input className="file-path" type="text" placeholder="Select a purchase order CVS file"></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col s1 m1" />
                        </div>
                    </div>
                </div>

                {/* blockchain explorer */}
                {this.displayBlock()}

            </div>
        )
    }
}
export default GreenFarm;
