// @flow

import { makeStyles } from '@material-ui/core'

export const useDropDownStyles = makeStyles({
  root: {
    backgroundColor: '#ffff',
    border: '1px solid #e5e5e5',
    alignItems: 'center',
    color: 'green',
    height: 25,
    maxWidth: 120,
    marginLeft: 5,
    marginRight: 5,
    opacity: 0.5,
    left: 0,
    overflow: 'hidden',
    padding: '0 8px',
    textOverflow: 'ellipsis',
    top: 3,
    whiteSpace: 'nowrap',
    width: '95%',

    '&:hover': {
      backgroundColor: '#8a8ae6',
      color: '#000000'
    },
  },

  label: {
    fontSize: 13,
    justifyContent: 'start',
    textTransform: 'none',
  },

  icon: {
    height: 24,
    width: 24,
  },
})

export const usePopoverStyles = makeStyles({
  paper: {
    height: 450,
    width: 330,
  },
})

export const useActionStyles = makeStyles({
  root: {
    borderTop: '1px solid #e5e5e5',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 8,
  },

  clearFilter: {
    marginRight: 80,
    fontWeight: 600,
    minWidth: 60,
    fontSize: 14,
  },

  base: {
    fontSize: 14,
    fontWeight: 600,
    marginLeft: 0,
    minWidth: 60,
    padding: '7px 8px',
  },
})
