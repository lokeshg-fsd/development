// @flow
import React, { useState } from 'react'

import Actions from './Actions'

export default function Reportdow({ item, handleOnEdit, handleOnDelete }) {
  const [selected, setSelected] = useState(item.checked || false)

  function handleOnCkeckChange(event) {
    const { checked } = event.currentTarget

    item.checked = checked
    setSelected(checked)
  }

  return (
    <tr key={item.id}>
      <td>
        {' '}
        <input
          key={item.id + item.name}
          checked={selected}
          onChange={handleOnCkeckChange}
          type="checkBox"
        />{' '}
      </td>
      <td> {item.name} </td>
      <td> {item.email} </td>
      <td> {item.role} </td>
      <td>
        {' '}
        <Actions
          handleOnDelete={handleOnDelete}
          handleOnEdit={handleOnEdit}
        />{' '}
      </td>
    </tr>
  )
}
