import React from 'react'

import editIcon from '../SVG/Edit.svg'
import deleteIcon from '../SVG/Delete.svg'

export default function Actions({ handleOnEdit, handleOnDelete }) {
  return (
    <div className="Icon">
      <img
        src={editIcon}
        alt="Edit"
        onClick={handleOnEdit}
        title="Click Here To Edit This Item"
      />

      <img
        src={deleteIcon}
        alt="Delete"
        onClick={handleOnDelete}
        title="Click Here To Delete This Item"
      />
    </div>
  )
}
