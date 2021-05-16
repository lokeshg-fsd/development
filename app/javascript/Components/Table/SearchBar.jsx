import React from 'react'

export default function SearchBar({ handleOnSearch }) {
  function handleOnChange(event) {
    if (event.key === 'Enter') {
      handleOnSearch(event.currentTarget.value)
      event.currentTarget.value = ''
    }
  }

  return (
    <div>
      <input
        placeholder="Search By name, email or role"
        style={{ width: '95%' }}
        onKeyPress={handleOnChange}
      />{' '}
      <br />
    </div>
  )
}
