/* eslint-disable no-unused-vars */
// @flow
import React, { useState } from 'react'
import { TectField } from '@material-ui/core'
// import DatePicker from '@material-ui/pickers/DatePicker';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'
import MomentUtils from '@date-io/moment'
import { flexious, UIComponent } from 'flexicious-react-datagrid'

class Datepicker extends UIComponent {
  handleChange = (event) => {
    this.grid.getCurrentEditCell().getRowInfo().getData()[
      this.column.dataField
    ] = event
    this.grid.getBodyContainer().endEdit(this)
  }

  render() {
    this.children = [
      <div key={this.column.dataField}>
        <TectField onchange={(event) => this.handleChange(event)} />
      </div>,
    ]

    return super.render()
  }
}

export default Datepicker
