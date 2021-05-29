// @flow
import React from 'react'

export default function ReportHeader({ isChecked, setIsChecked }) {
  function handleOnChange(event, checked) {
    setIsChecked(checked)
  }

  return (
    <div className="HeaderBar">
      <th>
        {' '}
        <input
          checked={isChecked}
          onChange={handleOnChange}
          type="checkBox"
        />{' '}
      </th>
      <th> Name </th>
      <th> Email </th>
      <th> Role </th>
      <th> Actions </th>
    </div>
  )
}
