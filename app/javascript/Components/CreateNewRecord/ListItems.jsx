// @flow

import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { List, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  textField: {
    paddingTop: '10px',
    width: '90%',
  },
}))

type Props = {
  userData: *,
  setUserData: (*) => mixed,
}

export default function DetailsList({ userData, setUserData }: Props) {
  const classes = useStyles()
  const [name, setName] = React.useState('')
  const handleChange = (event) => {
    setName(event.target.value)
  }

  function handleOnChange(event, field) {
    const user = {
      ...userData,
      [field]: event.target.value,
    }

    setUserData(user)
  }

  return (
    <List className={classes.root}>
      <TextField
        classes={{ root: classes.textField }}
        color="primary"
        id="standard-firstName"
        label="First Name"
        onChange={(event) => handleOnChange(event, 'firstName')}
        value={userData.firstName}
      />
      <TextField
        classes={{ root: classes.textField }}
        color="primary"
        id="standard-lastName"
        label="Last Name"
        onChange={(event) => handleOnChange(event, 'lastName')}
        value={userData.lastName}
      />
      <TextField
        classes={{ root: classes.textField }}
        color="primary"
        id="standard-email"
        label="Email"
        onChange={(event) => handleOnChange(event, 'email')}
        type="email"
        value={userData.email}
      />
      <TextField
        classes={{ root: classes.textField }}
        color="primary"
        id="standard-name"
        label="Last Name"
        onChange={handleChange}
        value={name}
      />
      <TextField
        classes={{ root: classes.textField }}
        color="primary"
        id="standard-type"
        label="Last Name"
        onChange={handleChange}
        value={name}
      />
      <TextField
        classes={{ root: classes.textField }}
        color="primary"
        id="standard"
        label="Name"
        onChange={handleChange}
        value={name}
      />
    </List>
  )
}
