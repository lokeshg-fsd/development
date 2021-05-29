// @flow

import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Popper, Paper, MenuItem, MenuList } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import type { HeaderBarMenuItem } from '../../types'
import useStyles from './useStyle'

function buildPropsforStyle(selected: boolean, open: boolean, width: number) {
  return {
    arrowOpacity: selected ? 0.5 : 0.3, // eslint-disable-line no-magic-numbers
    buttonBackground: open ? '#37598b' : 'transparent',
    labelStyle: selected ? { color: '#ffffff', fontWeight: 600 } : {},
    paperWidth: width,
    borderBottom:
      selected && !open ? '2px solid #FFFFFF' : '2px solid transparent',
  }
}

type Props = {
  id: string,
  menuItems: $ReadOnlyArray<HeaderBarMenuItem>,
  name: string,
  onHeaderItemChange: (string) => *,
  selected: boolean,
}

function HeaderItem({
  id,
  menuItems,
  name,
  selected,
  onHeaderItemChange,
}: Props) {
  const [open, setOpen] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(0)
  const [anchorEl, setAnchorEl] = useState<?HTMLDivElement>(null)
  const buttonRef = useRef<?HTMLButtonElement>(null)

  const style = useStyles(buildPropsforStyle(selected, open, width))

  useEffect(() => {
    const { current } = buttonRef

    if (current) {
      setWidth(current.offsetWidth)
    }
  }, [setWidth])

  const handleMouseEnter = (event: SyntheticMouseEvent<HTMLDivElement>) => {
    if (id === 'home') {
      return
    }

    setOpen(true)
    setAnchorEl(event.currentTarget)
  }

  const handleOnRequestClose = () => {
    setOpen(false)
  }

  const handleOnMenuItemSelect = (item: HeaderBarMenuItem) => {
    handleOnRequestClose()
    onHeaderItemChange(item.id)
  }

  return (
    <div
      className={style.navItemView}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleOnRequestClose}
    >
      <Button
        ref={buttonRef}
        classes={{
          root: style.button,
          label: style.label,
        }}
      >
        {name}
        <ArrowDropDownIcon className={style.downArrow} />
        <span className={style.boderBottom} />
      </Button>
      <Popper
        anchorEl={anchorEl}
        className={style.popover}
        onClose={handleOnRequestClose}
        open={open}
        placement="bottom-start"
      >
        <Paper className={style.paper}>
          <MenuList>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                className={style.menuItem}
                component={Link}
                id={item.id}
                onClick={() => handleOnMenuItemSelect(item)}
                to={item.routes[0].path}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popper>
    </div>
  )
}

export default HeaderItem
