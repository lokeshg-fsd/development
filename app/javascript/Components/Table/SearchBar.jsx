// @flow
import React from 'react'

import CreateNew from '../CreateNewRecord'

export default function SearchBar({ handleOnSearch, onRefresh }: *) {
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
        placeholder="Search By Data"
        style={{ width: '50%' }}
      />
      <CreateNew onSaveComplete={onRefresh} />
      <br />
    </div>
  )
}
