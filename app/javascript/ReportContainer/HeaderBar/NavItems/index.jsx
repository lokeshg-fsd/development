// @flow

import React, { useState, type ComponentType } from 'react'
import { Link } from 'react-router-dom'
import { List } from '@material-ui/core'
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons'

import NavMenuItem from './NavMenuItem'
import type { HeaderBarMenuItem } from '../../types'

type props = {
  onHeaderItemChange: (string) => *,
  Icon: ComponentType<*>,
  isOpen: boolean,
  menuItemsArray: $ReadOnlyArray<HeaderBarMenuItem>,
  name: string,
}

export default function NavItems({
  name,
  Icon,
  menuItemsArray,
  onHeaderItemChange,
  isOpen,
}: props) {
  const [open, setOpen] = useState<boolean>(isOpen)

  return (
    <List style={{ padding: 0 }}>
      <NavMenuItem
        LeftIcon={Icon}
        onClick={() => setOpen(!open)}
        RightIcon={open ? ExpandLessIcon : ExpandMoreIcon}
      >
        {name}
      </NavMenuItem>
      {open &&
        menuItemsArray.map((item) => (
          <NavMenuItem
            key={item.id}
            component={Link}
            isSubMenu
            onClick={() => onHeaderItemChange(item.id)}
            to={item.routes[0].path}
          >
            {item.name}
          </NavMenuItem>
        ))}
    </List>
  )
}
