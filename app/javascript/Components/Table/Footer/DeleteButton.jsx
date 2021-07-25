// @flow
import React from 'react'

// eslint-disable-next-line react/prop-types
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
