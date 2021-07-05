// @flow

import React, { Fragment, useState } from 'react'
// import { browserHistory } from 'react-router'
import { useHistory } from 'react-router-dom'

import DropDownButton from './DropdownButton'
import Popover from './Popover'

type Props = {
  onSaveComplete?: () => mixed,
}

export default function CreatePerson({ onSaveComplete }: Props) {
  // eslint-disable-next-line no-unused-vars
  // const { pathname } = useLocation()
  const history = useHistory()
  const [anchorEl, setAnchorEl] = useState<?HTMLDivElement>(null)

  function handleOnClick(event: SyntheticEvent<HTMLDivElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleOnClose() {
    setAnchorEl(null)
  }

  function handleOnOk() {
    setAnchorEl(null)
    onSaveComplete()
    history?.push('/pages')
    // browserHistory.push('/users/sign_in')
  }

  return (
    <>
      <DropDownButton label="Create New" onClick={handleOnClick} />
      <Popover
        anchorEl={anchorEl}
        onClear={handleOnClose}
        onClose={handleOnClose}
        onOk={handleOnOk}
        open={Boolean(anchorEl)}
      />
    </>
  )
}
