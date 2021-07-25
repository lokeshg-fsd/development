// @flow
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Snack from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
// @material-ui/icons
import Close from '@material-ui/icons/Close'
// core components
import styles from 'assets/jss/material-dashboard-react/components/snackbarContentStyle'

const useStyles = makeStyles(styles)

export default function SnackbarContent(props) {
  const classes = useStyles()
  const { message, color, close, icon, rtlActive } = props
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
      >
        <Close className={classes.close} />
      </IconButton>,
    ]
  }

  return (
    <Snack
      action={action}
      classes={{
        root: `${classes.root} ${classes[color]}`,
        message: classes.message,
        action: classNames({ [classes.actionRTL]: rtlActive }),
      }}
      message={
        <div>
          {icon === undefined && <props.icon className={classes.icon} />}
          <span className={messageClasses}>{message}</span>
        </div>
      }
    />
  )
}

SnackbarContent.propTypes = {
  close: PropTypes.bool,
  color: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'primary']),
  icon: PropTypes.object,
  message: PropTypes.node.isRequired,
  rtlActive: PropTypes.bool,
}
