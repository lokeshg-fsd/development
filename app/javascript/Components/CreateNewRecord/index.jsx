// @flow

import React, { Fragment, useState } from 'react'

import DropDownButton from './DropdownButton'
import Popover from './Popover'

export default function CreatePerson() {
  const [anchorEl, setAnchorEl] = useState<?HTMLDivElement>(null)

  function handleOnClick(event: SyntheticEvent<HTMLDivElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleOnClose() {
    setAnchorEl(null)
  }

  function handleOnOk() {
    setAnchorEl(null)
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

/*
 required fields for people creation
t.string "lastName"
    t.string "firstName"
    t.decimal "status", precision: 10
    t.string "userType"
    t.string "email"
    t.text "address"
    t.bigint "blood_id", default: 1, null: false
    t.bigint "branch_id", null: false */
