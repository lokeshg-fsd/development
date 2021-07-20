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
// @material-ui/icons
import Person from '@material-ui/icons/Person'
import Notifications from '@material-ui/icons/Notifications'
import Dashboard from '@material-ui/icons/Dashboard'
import Search from '@material-ui/icons/Search'
// core components
import CustomInput from 'components/CustomInput/CustomInput.js'
import Button from 'components/CustomButtons/Button.js'

import styles from 'assets/jss/material-dashboard-react/components/rtlHeaderLinksStyle.js'

const useStyles = makeStyles(styles)

export default function RTLNavbarLinks() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(null)
  const handleToggle = (event) => {
    if (open && open.contains(event.target)) {
      setOpen(null)
    } else {
      setOpen(event.currentTarget)
    }
  }

  const handleClose = () => {
    setOpen(null)
  }

  return (
    <div>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: `${classes.margin} ${classes.search}`,
          }}
          inputProps={{
            placeholder: 'جستجو...',
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
          <p className={classes.linkText}>آمارها</p>
        </Hidden>
      </Button>
      <div className={classes.manager}>
        <Button
          aria-haspopup="true"
          aria-owns={open ? 'menu-list-grow' : null}
          className={classes.buttonLink}
          color={window.innerWidth > 959 ? 'transparent' : 'white'}
          justIcon={window.innerWidth > 959}
          onClick={handleToggle}
          simple={!(window.innerWidth > 959)}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>۵</span>
          <Hidden implementation="css" mdUp>
            <p className={classes.linkText} onClick={handleToggle}>
              اعلان‌ها
            </p>
          </Hidden>
        </Button>
        <Poppers
          anchorEl={open}
          className={`${classNames({ [classes.popperClose]: !open })} ${
            classes.popperNav
          }`}
          disablePortal
          open={Boolean(open)}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList role="menu">
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleClose}
                    >
                      محمدرضا به ایمیل شما پاسخ داد
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleClose}
                    >
                      شما ۵ وظیفه جدید دارید
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleClose}
                    >
                      از حالا شما با علیرضا دوست هستید
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleClose}
                    >
                      اعلان دیگر
                    </MenuItem>
                    <MenuItem
                      className={classes.dropdownItem}
                      onClick={handleClose}
                    >
                      اعلان دیگر
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <Button
        aria-label="Person"
        className={classes.buttonLink}
        color={window.innerWidth > 959 ? 'transparent' : 'white'}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
      >
        <Person className={classes.icons} />
        <Hidden implementation="css" mdUp>
          <p className={classes.linkText}>حساب کاربری</p>
        </Hidden>
      </Button>
    </div>
  )
}
