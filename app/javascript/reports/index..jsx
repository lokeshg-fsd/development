// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import ReportContainer from '../ReportContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider>
        <ReportContainer />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  )
})
