// @flow

import React from 'react'
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import {
  listSubMenuItemTextStyles,
  selectedListItemTextStyles,
  unselectedListItemTextStyles,
  listItemStyles,
  subMenuListItemStyles,
  leftListItemIconStyles,
  rightListItemIconStyles,
  iconStyles,
} from './styles'

const useSelectedListItemTextStyles = makeStyles(selectedListItemTextStyles)
const useUnselectedListItemTextStyles = makeStyles(unselectedListItemTextStyles)
const useListSubMenuItemTextStyles = makeStyles(listSubMenuItemTextStyles)
const useListItemStyles = makeStyles(listItemStyles)
const useSubMenuListItemStyles = makeStyles(subMenuListItemStyles)
const useLeftListItemIconStyles = makeStyles(leftListItemIconStyles)
const useRightListItemIconStyles = makeStyles(rightListItemIconStyles)
const useIconStyles = makeStyles(iconStyles)

export type Props = {|
  children?: *,
  component?: *,
  email?: string,
  href?: string,
  isDisabled?: boolean,
  isSelected?: boolean,
  isSubMenu?: boolean,
  LeftIcon?: *,
  onClick?: (*) => void,
  RightIcon?: *,
  target?: string,
  to?: string,
|}

const NavMenuItem = ({
  children,
  component,
  email,
  href,
  isDisabled,
  isSelected,
  isSubMenu,
  LeftIcon,
  onClick,
  RightIcon,
  target,
  to,
}: Props) => {
  const listItemClasses = useListItemStyles()
  const subMenuListItemClasses = useSubMenuListItemStyles()
  const menuItemClasses = isSubMenu ? subMenuListItemClasses : listItemClasses
  const leftListItemIconClasses = useLeftListItemIconStyles()
  const rightlistItemIconClasses = useRightListItemIconStyles()
  const iconClasses = useIconStyles()
  const unselectedListItemTextClasses = useUnselectedListItemTextStyles()
  const selectedListItemTextClasses = useSelectedListItemTextStyles()
  const listSubMenuItemTextClasses = useListSubMenuItemTextStyles()
  const selectedItemClasses = isSelected ? selectedListItemTextClasses : null
  const submenuItemClasses = isSubMenu ? listSubMenuItemTextClasses : null
  const listItemTextClasses =
    selectedItemClasses || submenuItemClasses || unselectedListItemTextClasses

  // These two props (to and href) should be mutually exclusive
  const destinationProp = {
    ...((to && !href ? { to } : {}): $Shape<{|
      to: $PropertyType<Props, 'to'>,
    |}>),
    ...((href && !to ? { href } : {}): $Shape<{|
      href: $PropertyType<Props, 'href'>,
    |}>),
  }

  return (
    <ListItem
      button
      classes={menuItemClasses}
      component={component}
      data-testid="nav-menu-item"
      disabled={isDisabled}
      email={email}
      onClick={onClick}
      selected={isSelected}
      target={target}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...destinationProp}
    >
      <ListItemIcon classes={leftListItemIconClasses}>
        {LeftIcon && <LeftIcon classes={iconClasses} />}
      </ListItemIcon>
      <ListItemText classes={listItemTextClasses} primary={children} />
      <ListItemIcon classes={rightlistItemIconClasses}>
        {RightIcon && <RightIcon classes={iconClasses} />}
      </ListItemIcon>
    </ListItem>
  )
}

export default NavMenuItem
