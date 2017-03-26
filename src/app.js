'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers//Home/home.view.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/main.scss';
import allReducers from './reducers';
global._ = require('lodash');
  /**
  * Create the store {Object} {Combined reducers}
  * Import into create store, main store for the whole application
  **/
const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}><Home/></Provider>, document.getElementById('root'));
