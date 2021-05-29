// @flow
import React from 'react'

export default function DeleteButton({ handleOnClick }) {
  return (
    <div>
      <input
        className="DeleteButton"
        onClick={handleOnClick}
        type="button"
        value="Delete Selected"
      />
    </div>
  )
}
