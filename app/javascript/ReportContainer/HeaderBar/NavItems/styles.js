// @flow
const commonListItemStyles = {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '13px',
}

export const selectedListItemTextStyles = {
  primary: {
    fontWeight: 600,
    color: 'rgb(12, 107, 236)',
    ...commonListItemStyles,
  },
}

export const unselectedListItemTextStyles = {
  primary: {
    fontWeight: 600,
    color: '#212121',
    ...commonListItemStyles,
  },
}

export const listSubMenuItemTextStyles = {
  primary: {
    color: 'rgba(0, 0, 0, 0.87)',
    ...commonListItemStyles,
    fontSize: '12px',
  },
}

export const listItemStyles = {
  root: {
    height: 40,
  },
}

export const subMenuListItemStyles = {
  ...listItemStyles,
  gutters: {
    paddingRight: 8,
  },
}

export const leftListItemIconStyles = {
  root: {
    minWidth: 52,
  },
}

export const rightListItemIconStyles = {
  root: {
    minWidth: 24,
  },
}

export const iconStyles = {
  root: {
    height: '24px !important',
    width: '24px !important',
    marginLeft: 6,
  },
}
