// @flow
import React, { useState } from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers/'
// import DatePicker from '@material-ui/pickers/DatePicker';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'
import MomentUtils from '@date-io/moment'
import { flexious, UIComponent } from 'flexicious-react-datagrid'

class Datepicker extends UIComponent {
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    this.grid.getCurrentEditCell().getRowInfo().getData()[
      this.column.dataField
    ] = event
    this.grid.getBodyContainer().endEdit(this)
  }

  render() {
    this.children = [
      <div>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker onChange={this.handleChange} />
        </MuiPickersUtilsProvider>
      </div>,
    ]

    return super.render()
  }
}

export default Datepicker
