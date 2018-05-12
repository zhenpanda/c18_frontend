import React, { Component } from 'react';

import '../assets/css/blockchain.css';

import Blocks from './Blocks';

import dotsPic from '../assets/images/dots.png';

class Blockchain extends Component {
    
    displayChainConnection(cycle) {
        if(cycle === "one") {
            return(
                <div className="dot-group moveFromTopFade delay400">
                    <div className="row clean-row">
                        <div className="col s12 m12">
                            <div className="dot-row">
                            <img className="dot-img dots-anim-one" src={dotsPic} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row clean-row">
                        <div className="col s12 m12">
                            <div className="dot-row">
                            <img className="dot-img dots-anim-two" src={dotsPic} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row clean-row">
                        <div className="col s12 m12">
                            <div className="dot-row">
                            <img className="dot-img dots-anim-thr" src={dotsPic} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else if(cycle === "two") {
            return(
                <div className="dot-group moveFromTopFade delay400">
                    <div className="row clean-row">
                        <div className="col s12 m12">
                            <div className="dot-row">
                            <img className="dot-img dots-anim-thr" src={dotsPic} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row clean-row">
                        <div className="col s12 m12">
                            <div className="dot-row">
                            <img className="dot-img dots-anim-two" src={dotsPic} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row clean-row">
                        <div className="col s12 m12">
                            <div className="dot-row">
                            <img className="dot-img dots-anim-one" src={dotsPic} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            ) 
        }else if(cycle === "three") {           
        }
    }

    render() {

        if( this.props.stage === "greenfarm" ) {
            return(
                <div className="block-area moveFromLeftFade">
                    <div className="row">
                        <div className="col s2 m2" />
                        <div className="col s8 m8">
    
                            <div className="block-section">
                                <div className="block-explorer-header">Blockchain Explorer</div>
                            </div>

                            {/* connecting dots */}
                            {this.displayChainConnection("one")}
                            <Blocks block="one" time={this.props.time} />

                        </div>
                        <div className="col s2 m2" />
                    </div>
                </div> 
            )
        }else if( this.props.stage === "truck" ) {
            return(
                <div className="block-area moveFromLeftFade">
                    <div className="row">
                        <div className="col s2 m2" />
                        <div className="col s8 m8">
    
                            <div className="block-section">
                                <div className="block-explorer-header">Blockchain Explorer</div>

                                {this.displayChainConnection("two")}
                                <Blocks block="two" truckTime={this.props.truckTime} />
                           
                            </div>

                            {/* connecting dots */}
                            {this.displayChainConnection("one")}
                            <Blocks block="one" time={this.props.time} />
    
                        </div>
                        <div className="col s2 m2" />
                    </div>
                </div>
            )
        }else if( this.props.stage === "supermarket" ) {
            return(
                <div className="block-area moveFromLeftFade">
                    <div className="row">
                        <div className="col s2 m2" />
                        <div className="col s8 m8">

                            <div className="block-explorer-header-hospital">Blockchain Explorer</div>

                            <div className="block-section">
                                {this.displayChainConnection("one")}
                                <Blocks block="three" hospitalTime={this.props.hospitalTime} />
                            </div>

                            {this.displayChainConnection("two")}
                            <Blocks block="two" truckTime={this.props.truckTime} />

                            {/* connecting dots */}
                            {this.displayChainConnection("one")}
                            <Blocks block="one" time={this.props.time} />
                            
                        </div>
                        <div className="col s2 m2" />
                    </div>
                </div>
            )
        }else if( this.props.stage === "blank" ){
            return(
                <div className="block-area moveFromLeftFade">
                    <div className="row">
                        <div className="col s2 m2" />
                        <div className="col s8 m8">
                            <div className="block-section">
                                <div className="block-explorer-header">Blockchain Explorer</div>
                            </div>
                        </div>
                        <div className="col s2 m2" />
                    </div>
                </div>
            )
        }else{
            return(
                <div className="block-area-empty" />
            )
        }
    }

}
export default Blockchain;
