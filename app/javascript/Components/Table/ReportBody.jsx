// @flow

import React from 'react'

import RowRenderer from './Row'

export default function TableBody({
  handleOnDelete,
  items,
  handleOnEdit,
  fields,
}: *) {
  if (items?.lengtn === 0 || !items) {
    return <div> No Records Found </div>
  }

  return (
    <div>
      {items?.map((item, index) => (
        <div
          key={index}
          className="RowData"
          style={{
            ackgroundColor: 'beige',
            paddingLeft: '25px',
            width: '95%',
            alignItems: 'center',
            flexDirection: 'row',
            textAlign: 'center',
            height: '30px',
          }}
        >
          <RowRenderer
            fields={fields}
            handleOnDelete={() => handleOnDelete(item.email)}
            handleOnEdit={() => handleOnEdit(item)}
            item={item}
          />
          <br />
        </div>
      ))}
    </div>
  )
}
