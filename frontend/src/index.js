import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import './styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './config';


import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store/store';
import axios from 'axios';

React.icons = icons

axios.defaults.baseURL = 'http://localhost:5000';

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['token'] =localStorage.getItem('token');
  // console.log(config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

ReactDOM.render(
  <Provider store={store}>
           <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
