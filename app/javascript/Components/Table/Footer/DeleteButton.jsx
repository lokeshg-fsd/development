import React from 'react'

export default function DeleteButton({ handleOnClick }) {
  return (
    <div>
      {' '}
      <input
        className="DeleteButton"
        type="button"
        value="Delete Selected"
        onClick={handleOnClick}
      />{' '}
    </div>
  )
}
