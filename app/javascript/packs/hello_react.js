// @flow

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import random from 'lodash/random'

import '../Sample/App.css'
import reducer from '../Sample/Reducer'
import App from '../Sample/Table'
import useCustom from '../packs/useCustomFetch'

import Table from '../Components/Table'
import fetchApiData from '../Components/Data'

const store = createStore(reducer)

/* ReactDOM.render(
  <React.StrictMode>
    <Provider  store = {store} >
      <App />
    </Provider>container

  </React.StrictMode>,
 document.createElement('div')
); */
/* const Hello = React.createClass({
  render: function () {
    return <App />
  },
}) */

const apiURL = 'http://localhost:4000/persons/status?as=1'

function DomElement() {
  const [books, loading, refetch] = useCustom(apiURL)
  const [data, setData] = useState([])

  useEffect(() => {
    if (loading) {
      return
    }
    setData(books.data)
  }, [loading])

  return data ? <span> {JSON.stringify(data)} </span> : <span> </span>
}

/* React.render(
  <React.StrictMode>
    <Provider store={store}>
      <DomElement key={random()} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('container'),
) */

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Table fetchData={fetchApiData} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('container'),
  )
})
