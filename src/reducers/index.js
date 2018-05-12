import { combineReducers } from 'redux';

import testReducer from './test_reducer';
import shipmentReducer from './shipment_reducer';

const rootReducer = combineReducers({
  test: testReducer,
  shipment: shipmentReducer
});

export default rootReducer;