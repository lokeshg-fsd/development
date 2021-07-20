// @flow
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
// @material-ui/icons
import Menu from '@material-ui/icons/Menu'
// core components
import Button from 'components/CustomButtons/Button.js'

// hooks
import { useRouteName } from 'hooks'

import styles from 'assets/jss/material-dashboard-react/components/headerStyle.js'
import RTLNavbarLinks from './RTLNavbarLinks.js'
import AdminNavbarLinks from './AdminNavbarLinks.js'

const useStyles = makeStyles(styles)

export default function Header(props) {
  const classes = useStyles()
  const routeName = useRouteName()
  const { color } = props
  const appBarClasses = classNames({
    [` ${classes[color]}`]: color,
  })

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button className={classes.title} color="transparent" href="#">
            {routeName}
          </Button>
        </div>
        <Hidden implementation="css" smDown>
          {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
        </Hidden>
        <Hidden implementation="css" mdUp>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
}
