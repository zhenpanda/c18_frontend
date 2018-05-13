import React, { Component } from 'react';

import $ from 'jquery';

import '../../node_modules/materialize-css/dist/css/materialize.css';
import '../../node_modules/materialize-css/dist/js/materialize.js';
import '../../node_modules/materialize-css/js/initial.js';
import '../../node_modules/materialize-css/js/modal.js';

import phoneCaseMap from '../assets/images/phoneCaseMap.png';

window.jQuery = require('jquery');
window.$ = require('jquery');

class PhoneModal extends Component {

    displayPicture() {
        return( <img src={phoneCaseMap} className="phone-case-img" alt="" /> )
    }
    closeMap() {
        // $("#modalclick").click();
        this.props.pushSmsBlockChain();
    }

    render() {

        $(document).ready(function(){
            $('#modal1').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: 0.25, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 200, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%', // Ending top style attribute
                ready: function(modal, trigger) { console.log(modal, trigger) },
                complete: function() { console.log('Closed') }
            });
        });
        
        return (

            <div className="phone-modal-section">
            
                <div id="modal1" className="modal">
                    <div className="phone-modal-header-text">Farmer gets a requrest for sending GPS Location via [SMS]</div>
                    <div className="card card-panel">
                        <div className="phone-case-block" onClick={() => this.closeMap()}>
                            {this.displayPicture()}
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default PhoneModal;