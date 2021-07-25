// @flow
import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  grid: {
    padding: '0 15px !important',
  },
}

const useStyles = makeStyles(styles)

export default function GridItem(props) {
  const classes = useStyles()
  const { children, ...rest } = props

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  )
}

GridItem.propTypes = {
  children: PropTypes.node,
}
