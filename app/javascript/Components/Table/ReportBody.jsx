// @flow

import React from 'react'

import RowRenderer from './Row'

export default function TableBody({ handleOnDelete, items, handleOnEdit }: *) {
  if (items?.lengtn === 0 || !items) {
    return <div> No Records Found </div>
  }

  return (
    <div>
      {items?.map((item, index) => (
        <div key={index} className="RowData">
          <RowRenderer
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
