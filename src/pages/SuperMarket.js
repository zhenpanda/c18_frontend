import React, { Component } from 'react';
import moment from 'moment';

import $ from 'jquery';

import BlockChain from '../components/BlockChain';
import avocadoImg from '../assets/images/avocado.png';
import csvImg from '../assets/images/csv.png';

import "../assets/css/greenfarm.css";
import "../assets/css/supermarket.css";
import '../../node_modules/materialize-css';

class SuperMarket extends Component {

    state = { stage: "warehouse" }

    componentDidMount() {
        $(".farm-body-table").show();
        $(".farm-body-table").addClass("moveFromBottomFade");
    }

    displayBlock() {
        let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
        let firstBlockTime = moment().subtract(1, 'minutes').format("MMMM Do YYYY, h:mm:ss a");
        let secondBlockTIme = moment().subtract(2, 'minutes').format("MMMM Do YYYY, h:mm:ss a");
        let thirdBlockTIme = moment().subtract(3, 'minutes').format("MMMM Do YYYY, h:mm:ss a");

        if(this.state.stage === "warehouse") {
            return(
                <BlockChain 
                    stage="warehouse" 
                    time={currentTime}
                    firstBlockTime={firstBlockTime}
                    secondBlockTIme={secondBlockTIme}
                />
            )
        }else if(this.state.stage === "supermarket") {
            return(
                <BlockChain 
                    stage="supermarket" 
                    time={currentTime}
                    firstBlockTime={firstBlockTime}
                    secondBlockTIme={secondBlockTIme}
                    thirdBlockTIme={thirdBlockTIme}
                />
            )
        }
    };
    changeBlockChain() { 
        this.setState({stage: "supermarket"});
    }

    render() {
        return(

            <div className="supermarket-bg">

                {/* greenfarm main section */}
                <div className="row">
                    <div className="col s3 m3" />
                    <div className="col s9 m9">
                        <div className="row">
                            <div className="col s11 m11">
                                <div className="greenfarm-section z-depth-3">

                                    {/* greenfarm header */}
                                    <div className="row clean-row">
                                        <div className="col s3 m3 clean-row moveFromTopFade delay200">
                                            <div className="supermarket-header-left-tile" />
                                            <div className="greenfarm-header-left-block">
                                                <img src={avocadoImg} alt="" className="greenfarm-header-img z-depth-1" />
                                            </div>
                                        </div>
                                        <div className="col s9 m9 clean-row moveFromTopFade delay200">
                                            <div className="greenfarm-header-right-tile" />
                                            <div className="greenfarm-header-right-block">
                                                <div className="supermarket-title-text">Happy Avocado SuperMarket</div>
                                                <div className="greenfarm-mid-text"> [ H.A.S.M. Facility ] </div>
                                                <div className="greenfarm-bot-text">Order Tracking System:</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* greenfarm body */}
                                    <div className="row clean-row">
                                        
                                        <div className="col s3 m3 clean-row moveFromBottomFade delay600">
                                            <div className="supermarket-body-left-block">
                                            </div>

                                        </div>

                                        <div className="col s9 m9 clean-row">
                                            
                                            <div className="greenfarm-body-right-block moveFromBottomFade">
                                                <div className="row">
                                                    <div className="col s12 m12">
                                                        
                                                        {/* sku table */}
                                                        <div className="row">
                                                            <div className="col s12 m12">
                                                                <div className="farm-body-table orange lighten-2">
                                                                    <div className="farm-body-table-header">
                                                                        <div className="farm-body-table-text">
                                                                        <div className="fa fa-th-list manufactuer-body-icon" />
                                                                        Delivered Order Inventory Information</div>
                                                                    </div> 
                                                                    <div className="manufactuer-body-table-panel card card-panel">
                                                                        <div className="manufactuer-body-table-panel-text">
                                                                        <div className="fa fa-inbox manufactuer-panel-icon" />
                                                                        Incoming Inventory Shipment Preview
                                                                    </div>
                                                                    </div>

                                                                    <div className="warehouse-table-btn">
                                                                        <img src={csvImg} className="csv-img" alt="" />
                                                                            <div className="btn" onClick={() => this.changeBlockChain()}>Shipments Arrived</div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* display csv and push to Blockchain btn  */}

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

export default SuperMarket;