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
import CustomInput from 'components/CustomInput/CustomInput'
import Button from 'components/CustomButtons/Button'

import styles from 'assets/jss/material-dashboard-react/components/headerLinksStyle'

const useStyles = makeStyles(styles)
const defaultWidth = 959

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
        color={window.innerWidth > defaultWidth ? 'transparent' : 'white'}
        justIcon={window.innerWidth > defaultWidth}
        simple={!(window.innerWidth > defaultWidth)}
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
          color={window.innerWidth > defaultWidth ? 'transparent' : 'white'}
          justIcon={window.innerWidth > defaultWidth}
          onClick={handleClickNotification}
          simple={!(window.innerWidth > defaultWidth)}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>5</span>
          <Hidden implementation="css" mdUp>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
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
              // eslint-disable-next-line react/jsx-props-no-spreading
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
                      You&apos;re now friend with Andrew
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
          color={window.innerWidth > defaultWidth ? 'transparent' : 'white'}
          justIcon={window.innerWidth > defaultWidth}
          onClick={handleClickProfile}
          simple={!(window.innerWidth > defaultWidth)}
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
              // eslint-disable-next-line react/jsx-props-no-spreading
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
