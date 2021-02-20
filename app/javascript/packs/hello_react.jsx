// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import '../Sample/App.css'
import reducer from '../Sample/Reducer';
import App from '../Sample/Table';

const store = createStore(reducer);

/* ReactDOM.render(
  <React.StrictMode>
    <Provider  store = {store} >
      <App />
    </Provider>

  </React.StrictMode>,
 document.createElement('div')
); */

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider  store = {store} >
        <App />
      </Provider>
  
    </React.StrictMode>,
    document.body.appendChild(document.createElement('div')) 
 )
})
