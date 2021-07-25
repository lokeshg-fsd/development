// @flow
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Snack from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
// core components
import styles from 'assets/jss/material-dashboard-react/components/snackbarContentStyle'

const useStyles = makeStyles(styles)

export default function Snackbar(props) {
  const classes = useStyles()
  const { message, color, close, icon, place, open, rtlActive } = props
  let action = []
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined,
  })

  if (close !== undefined) {
    action = [
      <IconButton
        key="close"
        aria-label="Close"
        className={classes.iconButton}
        color="inherit"
        onClick={() => props.closeNotification()}
      >
        <Close className={classes.close} />
      </IconButton>,
    ]
  }

  const alignment = (align: string) => {
    if (align.indexOf('l') > -1) {
      return 'left'
    }

    return align.indexOf('c') > -1 ? 'center' : 'right'
  }

  return (
    <Snack
      action={action}
      anchorOrigin={{
        vertical: place.indexOf('t') === -1 ? 'bottom' : 'top',
        horizontal: alignment(place),
      }}
      ContentProps={{
        classes: {
          root: `${classes.root} ${classes[color]}`,
          message: classes.message,
          action: classNames({ [classes.actionRTL]: rtlActive }),
        },
      }}
      message={
        <div>
          {icon === undefined && <props.icon className={classes.icon} />}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      open={open}
    />
  )
}

Snackbar.propTypes = {
  close: PropTypes.bool,
  closeNotification: PropTypes.func,
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'primary']),
  icon: PropTypes.object,
  message: PropTypes.node.isRequired,
  open: PropTypes.bool,
  place: PropTypes.oneOf(['tl', 'tr', 'tc', 'br', 'bl', 'bc']),
  rtlActive: PropTypes.bool,
}
