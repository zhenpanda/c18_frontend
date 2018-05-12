import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk';

import { Switch, Route, Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import reducers from './reducers';

import Home from './pages/Home';
import GreenFarm from './pages/GreenFarm';

// CSS font
import '../node_modules/font-awesome/css/font-awesome.min.css';
// CSS ref
import '../node_modules/materialize-css/dist/css/materialize.css';
import 'react-transitions/dist/animations.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={history}>

        <Switch>

            <Route exact path='/' component={ Home } />
            <Route exact path='/greenfarm' component={ GreenFarm } />

        </Switch>

        </Router>
    </Provider>
  ,document.getElementById('root')
);

registerServiceWorker();