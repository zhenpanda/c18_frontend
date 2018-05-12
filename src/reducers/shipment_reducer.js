import { SHIPMENT,TRUCK,HOSPITAL } from '../actions/types';

// returns boolean
export default function(state={}, action) {
  switch (action.type) {
    case SHIPMENT:
      return {...state, manufacturer: action.payload};
    case TRUCK:
      return {...state, truck: action.payload};
    case HOSPITAL:
      return {...state, hospital: action.payload};
    default: break;
  }
  return state;
}