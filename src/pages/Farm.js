import React, { Component } from 'react';
import moment from 'moment';

import $ from 'jquery';

// import Finalize from '../components/Finalize';
import FarmMap from '../components/maps/FarmMap';
import BlockChain from '../components/BlockChain';

import '../assets/css/manufacturer.css';
import '../assets/css/farm.css';

class Farm extends Component {
    
    state = { map: true };

    displayTime() {
        $(".farm-body-table").show();
        $(".farm-body-table").addClass("moveFromBottomFade delay100");
    }
    displayMap() {
        if(true) {
            return( <FarmMap className="map-section" /> );
        }else{
            return( <FarmMap className="map-section" /> );
        }
    }
    // switch UI
    readyToShip () {
        $(".farm-block").addClass("moveFromTopFade");
        $(".farm-block").hide()
        $(".farm-body-table").addClass("moveFromTopFade delay100");
        $(".farm-body-table").hide();
        $('.farm-block-bot').addClass("moveFromBottomFade");
        $(".farm-time-block").show();
        $(".farm-time-block").addClass("moveFromBottomFade");
        $('.farm-block-bot').show();
        $(".farm-section").addClass("splash-sticker-farm");
        // this.props.shipmentfarm();
        $(".farm-body-table-long").hide();
    }
    // append block
    departShipment() {
        $(".farm-block-bot").remove();
        $(".finalize-area").addClass("moveFromBottomFade");
        $(".finalize-area").show();
        this.setState({map: true});
    }
    displayBlockchain() {
        let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
        return(
            <BlockChain 
                stage="greenfarm" 
                time={currentTime}
            />
        )
    }

    render() {
        return (
            <div className="farm-bg">

                <div className="splash-sticker moveFromTopFade">
                    <div className="farm-section">

                        {/* farm header */}
                        <div className="row clean-row">
                            <div className="col s12 m12">
                                <div className="card card-panel farm-block blue-grey darken-2 z-depth-3">
                                    <div className="farm-header-main-text">
                                    <div className="fa fa-leaf farm-header-icon" />
                                    Farm Shipment Track and Trace
                                    <div className="waves-effect waves-light btn farm-header-btn" onClick={() => this.displayTime()}>Load Delivery</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* farm time */}
                        <div className="row clean-row">
                            <div className="col s12 m12">
                                <div className="card card-panel farm-time-block blue-grey darken-2 z-depth-3">
                                    <div className="farm-time-main-text">Delivery Time</div>
                                    <div className="row">
                                        <div className="col s5 m5">
                                            <div className="farm-time-left-text">Depart Time: 9:00 AM</div>
                                            <div className="farm-time-left-text">Kongama farm Warehouse</div>
                                        </div>
                                        <div className="col s2 m2">
                                            <div className="fa fa-arrow-circle-o-right farm-time-icon" />
                                        </div>
                                        <div className="col s5 m5">
                                            <div className="farm-time-right-text">Delivered By: 5:00 PM</div>
                                            <div className="farm-time-right-text">West Africa Hospital</div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>

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
                                    
                                    {/* <farmTable className="sku-table-section" /> */}

                                    <div className="sku-table-btn" onClick={() =>this.readyToShip()}>Ready to Ship</div>
                                </div>
                            </div>
                        </div>

                        {/* departure */}
                        <div className="row">
                            <div className="col s12 m12">
                                <div className="card card-panel farm-block-bot z-depth-3">
                                    <div className="farm-bot-main-text">
                                    <div className="fa fa-rocket farm-bot-icon" />
                                    farm Loaded and Ready
                                        <div className="waves-effect waves-light btn farm-bot-btn" onClick={() => this.departShipment()}>Review Delivery Path</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <Finalize 
                            ship={this.props.shipmentfarm}
                            final="delivery"
                        /> */}

                    </div>
                </div>

                {/* block display */}
                {this.displayBlockchain()}

                {this.displayMap()}

            </div>
        )
    }
}
export default Farm;