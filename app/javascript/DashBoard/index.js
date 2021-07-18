/* eslint-disable import/extensions */
/* !

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.''-tim.com/product/material-dashboard-react
* Copyright 2021 '' Tim (https://www.''-tim.com)
* Licensed under MIT (https://github.com/''timofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by '' Tim

=========================================================

// eslint-disable-next-line max-len
* The above copyright notice and this permission
notice shall be included in all copies or substantial portions of the Software.

*/
// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// core components
import Admin from 'layouts/Admin.js'
import RTL from 'layouts/RTL.js'

import 'assets/css/material-dashboard-react.css?v=1.10.0'
// import 'assets/scss/material-dashboard-react.scss?v=1.10.0'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={Admin} path="/admin" />
      <Route component={RTL} path="/rtl" />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app'),
)
