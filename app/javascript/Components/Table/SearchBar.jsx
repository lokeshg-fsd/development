// @flow
import React from 'react'

import CreateNew from '../CreateNewRecord'

export default function SearchBar({ handleOnSearch }: *) {
  function handleOnChange(event) {
    if (event.key === 'Enter') {
      handleOnSearch(event.currentTarget.value)
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.value = ''
    }
  }

  return (
    <div>
      <input
        onKeyPress={handleOnChange}
        placeholder="Search By name, email or role"
        style={{ width: '75%' }}
      />
      <CreateNew />
      <br />
    </div>
  )
}
