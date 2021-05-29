// @flow

import React from 'react'
import { Button } from '@material-ui/core'
import { useActionStyles } from './styles'

import { getCSRFFetchOptions } from '../../common/csrf'
import createEmployee from '../Table/lib/createEmployee'
import { POST, CONTENT_TYPE_JSON } from '../Data'

type Props = {|
  onClear: () => void,
  onClose: () => mixed,
  onOk: () => mixed,
  userData: *,
|}

const ActionButtons = ({ onClose, onOk, userData }: Props) => {
  const classes = useActionStyles()

  function handleOnSave() {
    createEmployee(
      getCSRFFetchOptions({
        method: POST,
        headers: { 'Content-Type': CONTENT_TYPE_JSON },
        body: JSON.stringify({ person: userData }),
      }),
    )

    // eslint-disable-next-line no-alert
    alert('Successfully Created')
    onOk()
  }

  return (
    <div className={classes.root}>
      <Button
        className={classes.base}
        color="primary"
        onClick={onClose}
        size="small"
      >
        Cancel
      </Button>
      <Button
        className={classes.base}
        color="primary"
        onClick={handleOnSave}
        size="small"
      >
        Save
      </Button>
    </div>
  )
}

export default ActionButtons
