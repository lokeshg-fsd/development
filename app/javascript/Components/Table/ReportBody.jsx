import React from 'react'

import RowRenderer from './Row'

export default function TableBody({ handleOnDelete, items, handleOnEdit }) {
  if (items?.lengtn === 0 || !items) {
    return <div> No Records Found </div>
  } else {
    return (
      <div>
        {items?.map((item) => (
          <div className="RowData">
            <RowRenderer
              item={item}
              handleOnDelete={() => handleOnDelete(item.id)}
              handleOnEdit={() => handleOnEdit(item)}
            />
            <br />
          </div>
        ))}
      </div>
    )
  }
}
