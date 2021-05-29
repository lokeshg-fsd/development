// @flow

import { makeStyles } from '@material-ui/styles'

type Props = {
  arrowOpacity: number,
  buttonBackground: string,
  labelStyle: {
    color: string,
    fontWeight: number,
  },
  paperWidth: number,
  borderBottom: string,
}

export default makeStyles({
  navItemView: {
    width: 'max-content',
    '&:focus': {
      backgroundColor: '#37598b',
    },
    '&:hover': {
      backgroundColor: '#37598b',
    },
  },
  button: (props: Props) => ({
    background: props.buttonBackground,
    borderRadius: 0,
    color: 'rgba(255, 255, 255, 0.7)',
    padding: 0,
    height: '100%',
    minHeight: 42,
    fontFamily: 'Open Sans',

    '&:hover': {
      background: '#37598b',
    },
  }),

  label: (props) => ({
    padding: '0px 9px 0px 16px',
    ...props.labelStyle,
  }),

  downArrow: (props: Props) => ({
    height: 20,
    width: 20,
    marginTop: 2,
    opacity: props.arrowOpacity,
  }),

  boderBottom: (props: Props) => ({
    position: 'absolute',
    display: 'block',
    width: 'calc(100% - 16px)',
    borderBottom: props.borderBottom,
    top: 40,
    left: 8,
    transition: 'all 1s ease-out',
  }),

  popover: {
    zIndex: 1200,
  },
  paper: (props: Props) => ({
    backgroundColor: '#37598B',
    borderRadius: 0,
    boxShadow: 'none',
    minWidth: props.paperWidth,
  }),
  menuItem: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: '#FFFFFF',
    },
  },
})
