// @flow
import React, { useState } from 'react'

export default function ReportHeader({ fields, isChecked, setIsChecked }: *) {
  const [selected, setSelected] = useState(isChecked)

  function handleOnChange(event) {
    const value = event.currentTarget.value === 'on'

    setIsChecked(value)
    setSelected(value)
  }

  return (
    <div
      className="HeaderBar"
      style={{
        ackgroundColor: 'beige',
        paddingLeft: '25px',
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        lineHeight: 2,
      }}
    >
      <th style={{ textAlign: 'center', width: '100px' }}>
        {' '}
        <input
          checked={selected}
          onChange={handleOnChange}
          type="checkBox"
        />{' '}
      </th>
      {fields.map((field, index) => (
        <th key={index} style={{ textAlign: 'center', width: '150px' }}>
          {field}
        </th>
      ))}
      <th style={{ textAlign: 'center', width: '100px' }}> Actions </th>
    </div>
  )
}
