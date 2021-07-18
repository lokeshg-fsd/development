// @flow
import React from 'react'
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Hidden from '@material-ui/core/Hidden'
import Poppers from '@material-ui/core/Popper'
import Divider from '@material-ui/core/Divider'
// @material-ui/icons
import Person from '@material-ui/icons/Person'
import Notifications from '@material-ui/icons/Notifications'
import Dashboard from '@material-ui/icons/Dashboard'
import Search from '@material-ui/icons/Search'
// core components
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-dashboard-react/components/headerLinksStyle.js'

const useStyles = makeStyles(styles)

export default function AdminNavbarLinks() {
  const classes = useStyles()
  const [openNotification, setOpenNotification] = React.useState(null)
  const [openProfile, setOpenProfile] = React.useState(null)
  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null)
    } else {
      setOpenNotification(event.currentTarget)
    }
  }
  const handleCloseNotification = () => {
    setOpenNotification(null)
  }
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null)
    } else {
      setOpenProfile(event.currentTarget)
    }
  }
  const handleCloseProfile = () => {
    setOpenProfile(null)
  }

  return (
    <div>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: `${classes.margin} ${classes.search}`,
          }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search',
            },
          }}
        />
        <Button aria-label="edit" color="white" justIcon round>
          <Search />
        </Button>
      </div>
      <Button
        aria-label="Dashboard"
        className={classes.buttonLink}
        color={window.innerWidth > 959 ? 'transparent' : 'white'}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
      >
        <Dashboard className={classes.icons} />
        <Hidden implementation="css" mdUp>
          <p className={classes.linkText}>Dashboard</p>
        </Hidden>
      </Button>
      <div className={classes.manager}>
        <Button
          aria-haspopup="true"
          aria-owns={openNotification ? 'notification-menu-list-grow' : null}
          className={classes.buttonLink}
          color={window.innerWidth > 959 ? 'transparent' : 'white'}
          justIcon={window.innerWidth > 959}
          onClick={handleClickNotification}
          simple={!(window.innerWidth > 959)}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>5</span>
          <Hidden implementation="css" mdUp>
            <p className={classes.linkText} onClick={handleCloseNotification}>
              Notification
            </p>
          </Hidden>
        </Button>
        <Poppers
          anchorEl={openNotification}
          className={`${classNames({
            [classes.popperClose]: !openNotification,
          })} ${classes.popperNav}`}
          disablePortal
          open={Boolean(openNotification)}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      Mike John responded to your email
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      You have 5 new tasks
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      You're now friend with Andrew
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      Another Notification
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseNotification}
                    >
                      Another One
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <div className={classes.manager}>
        <Button
          aria-haspopup="true"
          aria-owns={openProfile ? 'profile-menu-list-grow' : null}
          className={classes.buttonLink}
          color={window.innerWidth > 959 ? 'transparent' : 'white'}
          justIcon={window.innerWidth > 959}
          onClick={handleClickProfile}
          simple={!(window.innerWidth > 959)}
        >
          <Person className={classes.icons} />
          <Hidden implementation="css" mdUp>
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
        <Poppers
          anchorEl={openProfile}
          className={`${classNames({ [classes.popperClose]: !openProfile })} ${
            classes.popperNav
          }`}
          disablePortal
          open={Boolean(openProfile)}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseProfile}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseProfile}
                    >
                      Settings
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleCloseProfile}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  )
}
