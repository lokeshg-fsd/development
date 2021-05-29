// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import '../Sample/App.css'
import reducer from '../Sample/Reducer'

import Table from '../Components/Table'
import fetchApiData from '../Components/Data'

const store = createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Table fetchData={fetchApiData} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('app'),
  )
})
