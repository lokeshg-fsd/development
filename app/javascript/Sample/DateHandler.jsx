// @flow
import React, { useState } from 'react'
import DatePicker from '@material-ui/pickers/DatePicker'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const DateHandler = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker onChange={(evnt) => setDate(evnt.value)} value={date} />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default DateHandler
