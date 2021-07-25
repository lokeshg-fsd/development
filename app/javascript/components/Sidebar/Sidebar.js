// @flow

import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
// core components
import AdminNavbarLinks from 'components/Navbars/AdminNavbarLinks'
import RTLNavbarLinks from 'components/Navbars/RTLNavbarLinks'

import styles from 'assets/jss/material-dashboard-react/components/sidebarStyle'

const useStyles = makeStyles(styles)

export default function Sidebar(props) {
  const classes = useStyles()
  const location = useLocation()

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName
  }
  const { color, logo, image, logoText, routes } = props
  const links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        let activePro = ' '
        let listItemClasses

        if (prop.path === '/upgrade-to-pro') {
          activePro = `${classes.activePro} `
          listItemClasses = classNames({
            [` ${classes[color]}`]: true,
          })
        } else {
          listItemClasses = classNames({
            [` ${classes[color]}`]: activeRoute(prop.layout + prop.path),
          })
        }
        const whiteFontClasses = classNames({
          [` ${classes.whiteFont}`]: activeRoute(prop.layout + prop.path),
        })

        return (
          <NavLink
            key={key}
            activeClassName="active"
            className={activePro + classes.item}
            to={prop.layout + prop.path}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === 'string' ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive,
                  })}
                />
              )}
              <ListItemText
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive,
                })}
                disableTypography
                primary={props.rtlActive ? prop.rtlName : prop.name}
              />
            </ListItem>
          </NavLink>
        )
      })}
    </List>
  )
  const brand = (
    <div className={classes.logo}>
      <a
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
        href="https://www.''-tim.com?ref=mdr-sidebar"
        rel="noreferrer"
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img alt="logo" className={classes.img} src={logo} />
        </div>
        {logoText}
      </a>
    </div>
  )

  return (
    <div>
      <Hidden implementation="css" mdUp>
        <Drawer
          anchor={props.rtlActive ? 'left' : 'right'}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          onClose={props.handleDrawerToggle}
          open={props.open}
          variant="temporary"
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links}
          </div>
          {image === undefined && (
            <div
              className={classes.background}
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </Drawer>
      </Hidden>
      <Hidden implementation="css" smDown>
        <Drawer
          anchor={props.rtlActive ? 'right' : 'left'}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          open
          variant="permanent"
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image === undefined && (
            <div
              className={classes.background}
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </Drawer>
      </Hidden>
    </div>
  )
}

Sidebar.propTypes = {
  bgColor: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'red']),
  color: PropTypes.oneOf(['purple', 'blue', 'green', 'orange', 'red']),
  handleDrawerToggle: PropTypes.func,
  image: PropTypes.string,
  logo: PropTypes.string,
  logoText: PropTypes.string,
  open: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  rtlActive: PropTypes.bool,
}
