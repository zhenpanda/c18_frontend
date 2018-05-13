import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import BlockChain from '../components/BlockChain';

import greenfarmImg from '../assets/images/greenfarm_logo.png';
import csvImg from '../assets/images/csv.png';

import "../assets/css/greenfarm.css";

import $ from 'jquery';
import '../../node_modules/materialize-css';

class GreenFarm extends Component {

    state = {
        stage: null,
        csv: null
    }

    displayBlock() {
        let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
        if(this.state.stage === null) {
            return(
                <BlockChain />
            )
        }else if(this.state.stage === "greenfarm"){
            return(
                <BlockChain 
                    stage="greenfarm" 
                    time={currentTime}
                />
            )
        }
    };
    changeStage() { this.setState({stage: "greenfarm"}) };

    displayImg() {
        if(this.state.csv) {
            return(
                <div>
                    <img src={csvImg} className="csv-img moveFromBottomFade" alt="" />
                    <div className="push-block-btn-block moveFromTopFade delay200">
                        <div className="btn push-block-btn btn-large" onClick={() => this.changeStage()}>Push to BlockChain</div>
                    </div>
                </div>
            )
        }
    };
    displayFarmInfo() {
        if(this.state.csv) {
            return(
                <div className="moveFromTopFade">
                    <div className="greenfarm-farm-header-block moveFromTopFade delay100">
                        <div className="greenfarm-farm-header-text">Farm Name:</div>
                    </div>
                    <div className="greenfarm-farm-block moveFromTopFade delay200">
                        <div className="greenfarm-farm-block-text">Backyard Brine Pickle Co.</div>
                        <div className="greenfarm-farm-block-text">Pickles from Suffolk County, New York</div>
                    </div>

                    <div className="greenfarm-farm-header-block moveFromTopFade delay300">
                        <div className="greenfarm-farm-header-text">Farm Address:</div>
                    </div>
                    <div className="greenfarm-farm-address-block moveFromTopFade delay400">
                        <div className="greenfarm-farm-address-text">8595 Cox Lane, Unit 1</div>
                        <div className="greenfarm-farm-address-text">Cutchogue, NY 11935</div>
                    </div>

                    {this.displayFarmLink()}
                </div>
            )
        }
    }
    displayFarmLink() {
        if(this.state.stage) {
            return(
                <Link to="/farm">
                    <div className="btn shipment-btn moveFromBottomFade">Farm Shipment Tracking</div>
                </Link>
            )
        }
    }
    changeCsv() { this.setState({csv: true}) };

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
                                                <div className="greenfarm-title-text">Greenmarket Farmers Markets</div>
                                                <div className="greenfarm-mid-text"> [ Wholesale Greenmarket. Facility ] </div>
                                                <div className="greenfarm-bot-text">Order Tracking System:</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* greenfarm body */}
                                    <div className="row clean-row">
                                        
                                        <div className="col s3 m3 clean-row moveFromBottomFade delay600">
                                            <div className="greenfarm-body-left-block">
                                                {this.displayFarmInfo()}
                                            </div>
                                        </div>

                                        <div className="col s9 m9 clean-row">
                                            
                                            <div className="greenfarm-body-right-block">
                                                <div className="row">
                                                    <div className="col s12 m12">

                                                        {/* input csv data */}
                                                        <div className="row">
                                                            <div className="col s10 m10">
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
                                                            <div className="col s2 m2">
                                                                <div className="btn upload-btn" onClick={() => this.changeCsv()}>Upload</div>
                                                            </div>
                                                        </div>
                                                        
                                                        {/* display csv and push to Blockchain btn  */}
                                                        {this.displayImg()}

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
