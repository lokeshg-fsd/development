/* eslint-disable import/extensions */
// @flow
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import Navbar from 'components/Navbars/Navbar.js'
import Footer from 'components/Footer/Footer.js'
import Sidebar from 'components/Sidebar/Sidebar.js'
import FixedPlugin from 'components/FixedPlugin/FixedPlugin.js'

import routes from 'DashBoard/routes.js'

import styles from 'assets/jss/material-dashboard-react/layouts/adminStyle.js'

import bgImage from 'assets/img/sidebar-2.jpg'
import logo from 'assets/img/reactlogo.png'

let ps

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            key={key}
            component={prop.component}
            path={prop.layout + prop.path}
          />
        )
      }

      return null
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
)

const useStyles = makeStyles(styles)

export default function Admin({ ...rest }) {
  // styles
  const classes = useStyles()
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef()
  // states and functions
  const [image, setImage] = React.useState(bgImage)
  const [color, setColor] = React.useState('blue')
  const [fixedClasses, setFixedClasses] = React.useState('dropdown show')
  const [mobileOpen, setMobileOpen] = React.useState(false)
  // eslint-disable-next-line no-shadow
  const handleImageClick = (image) => {
    setImage(image)
  }
  // eslint-disable-next-line no-shadow
  const handleColorClick = (color) => {
    setColor(color)
  }
  const handleFixedClick = () => {
    if (fixedClasses === 'dropdown') {
      setFixedClasses('dropdown show')
    } else {
      setFixedClasses('dropdown')
    }
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const getRoute = () => window.location.pathname !== '/admin/maps'
  const resizeFunction = () => {
    // eslint-disable-next-line no-magic-numbers
    if (window.innerWidth >= 960) {
      setMobileOpen(false)
    }
  }

  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      })
      document.body.style.overflow = 'hidden'
    }
    window.addEventListener('resize', resizeFunction)

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy()
      }
      window.removeEventListener('resize', resizeFunction)
    }
  }, [mainPanel])

  return (
    <div className={classes.wrapper}>
      <Sidebar
        color={color}
        handleDrawerToggle={handleDrawerToggle}
        image={image}
        logo={logo}
        logoText="My Life Saver"
        open={mobileOpen}
        routes={routes}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      <div ref={mainPanel} className={classes.mainPanel}>
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
          routes={routes}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
        <FixedPlugin
          bgColor={color}
          bgImage={image}
          fixedClasses={fixedClasses}
          handleColorClick={handleColorClick}
          handleFixedClick={handleFixedClick}
          handleImageClick={handleImageClick}
        />
      </div>
    </div>
  )
}
