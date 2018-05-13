import React, { Component } from 'react';
import hash from 'object-hash';

import BlockOne from '../assets/images/blockGenesis.png';
import BlockTwo from '../assets/images/blockCase.png';
import BlockThree from '../assets/images/blockRed.png';
import BlockFour from '../assets/images/blockHospital.png';

class Blocks extends Component {

    displayHash(time) {
        let hashStr = "112345"
        if(time) hashStr = hash(time);
        let trimmedHash = "0x" + hashStr.substring(0, 16) + "...";
        return( <span>{trimmedHash}</span> );
    }

    render() {
        // console.log(hash.sha256().update('abc').digest('hex'));

        if(this.props.block === "one") {
            return(
                <div className="block-block z-depth-3 moveFromTopFade delay500">
                    <div className="block-title-text">BLOCK #1</div>
                    <div className="block-time-text">{this.props.time}</div>
                    <img className="block-img" src={BlockOne} alt="" />
                    <div className="block-hash-tag">HASH:</div>
                    <div className="block-hash-text">{this.displayHash(this.props.time)}</div>
                </div>
            )
        }else if(this.props.block === "two") {
            return(
                <div className="block-block-two z-depth-3 moveFromTopFade delay400">
                    <div className="block-title-text-two">BLOCK #2</div>
                    <div className="block-time-text">{this.props.truckTime}</div>
                    <img className="block-img-two" src={BlockTwo} alt="" />
                    <div className="block-hash-tag">HASH:</div>
                    <div className="block-hash-text">{this.displayHash(this.props.truckTime)}</div>
                </div>
            )
        }else if(this.props.block === "three") {
            return(
                <div className="block-block-two z-depth-3 moveFromTopFade delay300">
                    <div className="block-title-text-two">BLOCK #3</div>
                    <div className="block-time-text">{this.props.hospitalTime}</div>
                    <img className="block-img-two" src={BlockThree} alt="" />
                    <div className="block-hash-tag">HASH:</div>
                    <div className="block-hash-text">{this.displayHash(this.props.hospitalTime)}</div>
                </div>
            )
        }else if(this.props.block === "four") {
            return(
                <div className="block-block-two z-depth-3 moveFromRightFade delay200">
                    <div className="block-title-text-two">BLOCK #4</div>
                    <div className="block-time-text">{this.props.superMarketTime}</div>
                    <img className="block-img-two" src={BlockFour} alt="" />
                    <div className="block-hash-tag">HASH:</div>
                    <div className="block-hash-text">{this.displayHash(this.props.superMarketTime)}</div>
                </div>
            )
        }
    }

}
export default Blocks;