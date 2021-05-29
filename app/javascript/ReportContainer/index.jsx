// @flow
import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import HeaderBar from './HeaderBar'

import useReportDefinitions from './hooks/useReportDefinitions'

function ReportContainer() {
  const [headerItems] = useReportDefinitions()

  return (
    <BrowserRouter>
      <>
        <HeaderBar />
        <Switch>
          {headerItems.map((item) =>
            item.menuItems.map((menuItem) =>
              menuItem.routes.map((route) => {
                const ReportComponent = route.component

                return (
                  <Route key={route.id} exact path={route.path}>
                    <ReportComponent configKey={route.id} />
                  </Route>
                )
              }),
            ),
          )}
          <Route exact path="/" render={() => <Redirect to="/pages" />} />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default ReportContainer
