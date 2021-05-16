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
          type="checkBox"
          checked={selected}
          onChange={handleOnCkeckChange}
        />{' '}
      </td>
      <td> {item.name} </td>
      <td> {item.email} </td>
      <td> {item.role} </td>
      <td>
        {' '}
        <Actions
          handleOnEdit={handleOnEdit}
          handleOnDelete={handleOnDelete}
        />{' '}
      </td>
    </tr>
  )
}
