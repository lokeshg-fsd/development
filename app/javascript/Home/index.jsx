/* eslint-disable no-unused-vars */
// @flow

import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import NavBar from './NavBar'
import Login from '../Sample/Login'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
})

export default function Home() {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  return (
    <>
      {/* <BottomNavigation
            <NavBar />
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                showLabels
                className={classes.root}
            >
                <span> {value} </span>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation> */}
      <Login />
    </>
  )
}
