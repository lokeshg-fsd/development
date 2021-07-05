// @flow

import React, { useState } from 'react'
import { Box, Popover as MuiPopover } from '@material-ui/core'

import ActionButtons from './ActionButtons'
import ListItems from './ListItems'
import { usePopoverStyles } from './styles'

type Props = {|
  anchorEl: ?HTMLDivElement,
  onClear: () => void,
  onClose: () => mixed,
  onOk: () => mixed,
  open: boolean,
|}

const Popover = ({ anchorEl, onClear, onClose, onOk, open }: Props) => {
  const [userData, setUserData] = useState({
    lastName: '',
    firstName: '',
    status: 0,
    email: '',
    address: '',
    userType: '',
    blood_id: 1,
    branch_id: 3,
  })
  const classes = usePopoverStyles()

  return (
    <MuiPopover
      anchorEl={anchorEl}
      classes={{ paper: classes.paper }}
      onClose={onClose}
      open={open}
    >
      <Box
        component="div"
        css={{
          paddingLeft: '15px',
          border: '5px solid #8a8ae6',
          flexDirection: 'column',
          height: '360px',
          flexWrap: 'nowrap',
          overflow: 'scroll',
        }}
        pt={2}
      >
        <ListItems setUserData={setUserData} userData={userData} />
      </Box>
      <ActionButtons
        onClear={onClear}
        onClose={onClose}
        onOk={onOk}
        userData={userData}
      />
    </MuiPopover>
  )
}

export default Popover
