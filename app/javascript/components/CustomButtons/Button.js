// @flow
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'

// material-ui components
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from 'assets/jss/material-dashboard-react/components/buttonStyle'

const useStyles = makeStyles(styles)

export default function RegularButton(props) {
  const classes = useStyles()
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  })

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  )
}

RegularButton.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
    'white',
    'transparent',
  ]),
  disabled: PropTypes.bool,
  justIcon: PropTypes.bool,
  link: PropTypes.bool,
  muiClasses: PropTypes.object,
  round: PropTypes.bool,
  simple: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  // use this to pass the classes props from Material-UI
}
