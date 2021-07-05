// @flow
import React, { useState } from 'react'

import Actions from './Actions'

export default function Reportdow({
  item,
  handleOnEdit,
  handleOnDelete,
  fields,
}: *) {
  const [selected, setSelected] = useState(item.checked || false)

  function handleOnCkeckChange(event) {
    const checked = event.currentTarget.value === 'on'

    // eslint-disable-next-line no-param-reassign
    item.checked = checked
    setSelected(checked)
  }

  return (
    <tr key={item.id} style={{ border: '1px solid #ddd' }}>
      <td style={{ textAlign: 'center', width: '100px' }}>
        <input
          key={item.id + item.name}
          checked={selected}
          onChange={handleOnCkeckChange}
          type="checkBox"
        />
      </td>
      {fields.map((field, index) => (
        <td key={index} style={{ textAlign: 'center', width: '150px' }}>
          {item[field.toLowerCase()]}
        </td>
      ))}
      {/* <td style={{ textAlign: 'center', width: '150px' }}> {item.name} </td>
      <td style={{ textAlign: 'center', width: '150px' }}> {item.email} </td>
      <td style={{ textAlign: 'center', width: '150px' }}> {item.role} </td> */}
      <td style={{ textAlign: 'center', width: '100px' }}>
        <Actions handleOnDelete={handleOnDelete} handleOnEdit={handleOnEdit} />
      </td>
    </tr>
  )
}
