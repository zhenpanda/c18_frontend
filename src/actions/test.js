import { FETCH_TEST, SHIPMENT, TRUCK, HOSPITAL } from './types';
import moment from 'moment';

export function plsTestMe() {
    return function(dispatch) {

        dispatch({
            type: FETCH_TEST,
            payload: {
                "data": "this is like a test"
            }
        });
      }
}

export function shipmentCall() {
    return function(dispatch) {
        console.log("Send shipmentCall...");
        let time = moment().format("MMMM Do YYYY, h:mm:ss a");

        dispatch({
            type: SHIPMENT,
            payload: {
                "data": "shipped",
                "time": time
            }
        });
      }
}

export function shipmentTruck() {
    return function(dispatch) {
        console.log("Send shipmentTruck...");
        let time = moment().format("MMMM Do YYYY, h:mm:ss a");

        dispatch({
            type: TRUCK,
            payload: {
                "data": "trucked",
                "time": time
            }
        });
      }
}

export function shipmentHospital() {
    return function(dispatch) {
        console.log("Send shipmentHospital...");
        let time = moment().format("MMMM Do YYYY, h:mm:ss a");

        dispatch({
            type: HOSPITAL,
            payload: {
                "data": "delivered",
                "time": time
            }
        });
      }
}