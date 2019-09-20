// Redux side of things for the application
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// two reducers: auth for checking user log-in status and surverys to record list of surveys created by user 

const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); 

ReactDOM.render(
    <Provider store={store}><App /></Provider>,         // react component that knows how to read changes from redux store when new states are produced
    document.querySelector('#root')
);

