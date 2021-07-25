// @flow
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons

// core components
import styles from 'assets/jss/material-dashboard-react/components/cardIconStyle'

const useStyles = makeStyles(styles)

export default function CardIcon(props) {
  const classes = useStyles()
  const { className, children, color, ...rest } = props
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[`${color}CardHeader`]]: color,
    [className]: className !== undefined,
  })

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  )
}

CardIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose',
  ]),
}
