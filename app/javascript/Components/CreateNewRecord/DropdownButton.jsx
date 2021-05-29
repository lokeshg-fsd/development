// @flow

import React from 'react'
import { Box, Button } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/PersonAdd'

import { useDropDownStyles } from './styles'

type Props = {|
  label: string | number,
  onClick: (SyntheticEvent<HTMLDivElement>) => mixed,
|}

const DropDownButton = ({ label, onClick }: Props) => {
  const classes = useDropDownStyles()

  return (
    <Button
      classes={{ root: classes.root, label: classes.label }}
      color="primary"
      disableFocusRipple
      disableRipple
      onClick={onClick}
    >
      {label || 'Create New Record'}
      <Box height={20} position="absolute" right={8}>
        <ArrowDropDownIcon className={classes.icon} />
      </Box>
    </Button>
  )
}

export default DropDownButton
