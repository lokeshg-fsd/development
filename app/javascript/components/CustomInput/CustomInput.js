/* eslint-disable no-nested-ternary */
// @flow
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
// @material-ui/icons
import Clear from '@material-ui/icons/Clear'
import Check from '@material-ui/icons/Check'
// core components
import styles from 'assets/jss/material-dashboard-react/components/customInputStyle'

const useStyles = makeStyles(styles)

export default function CustomInput(props) {
  const classes = useStyles()
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success,
    rtlActive,
  } = props

  const labelClasses = classNames({
    [` ${classes.labelRootError}`]: error,
    [` ${classes.labelRootSuccess}`]: success && !error,
    [` ${classes.labelRTL}`]: rtlActive,
  })
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  })
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
  })
  const newInputProps = {
    maxLength:
      inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
    minLength:
      inputProps && inputProps.minLength ? inputProps.minLength : undefined,
    step: inputProps && inputProps.step ? inputProps.step : undefined,
  }

  return (
    <FormControl
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...formControlProps}
      className={`${formControlProps.className} ${classes.formControl}`}
    >
      {labelText === undefined && (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      )}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...inputProps}
        inputProps={newInputProps}
      />
      {error ? (
        <Clear className={`${classes.feedback} ${classes.labelRootError}`} />
      ) : success ? (
        <Check className={`${classes.feedback} ${classes.labelRootSuccess}`} />
      ) : null}
    </FormControl>
  )
}

CustomInput.propTypes = {
  error: PropTypes.bool,
  formControlProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  labelProps: PropTypes.object,
  labelText: PropTypes.node,
  rtlActive: PropTypes.bool,
  success: PropTypes.bool,
}
