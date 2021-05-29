/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// @flow

import React from 'react'

import editIcon from '../SVG/Edit.svg'
import deleteIcon from '../SVG/Delete.svg'

export default function Actions({ handleOnEdit, handleOnDelete }: *) {
  return (
    <div className="Icon">
      <img
        alt="Edit"
        onClick={handleOnEdit}
        src={editIcon}
        style={{
          width: '25px',
          height: '25px',
        }}
        title="Click Here To Edit This Item"
      />

      <img
        alt="Delete"
        onClick={handleOnDelete}
        src={deleteIcon}
        style={{
          width: '25px',
          height: '25px',
        }}
        title="Click Here To Delete This Item"
      />
    </div>
  )
}
