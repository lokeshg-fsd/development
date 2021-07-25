// @flow

import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// @material-ui/icons
import AddAlert from '@material-ui/icons/AddAlert'
// core components
import GridItem from 'components/Grid/GridItem'
import GridContainer from 'components/Grid/GridContainer'
import Button from 'components/CustomButtons/Button'
import SnackbarContent from 'components/Snackbar/SnackbarContent'
import Snackbar from 'components/Snackbar/Snackbar'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody'

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
}

const useStyles = makeStyles(styles)

const TimeOutDuration = 6000

export default function Notifications() {
  const classes = useStyles()
  const [tl, setTL] = React.useState(false)
  const [tc, setTC] = React.useState(false)
  const [tr, setTR] = React.useState(false)
  const [bl, setBL] = React.useState(false)
  const [bc, setBC] = React.useState(false)
  const [br, setBR] = React.useState(false)

  React.useEffect(
    () =>
      // Specify how to clean up after this effect:
      function cleanup() {
        // to stop the warning of calling setState of unmounted component
        let id = window.setTimeout(null, 0)

        // eslint-disable-next-line no-plusplus
        while (id--) {
          window.clearTimeout(id)
        }
      },
  )
  const showNotification = (place) => {
    switch (place) {
      case 'tl':
        if (!tl) {
          setTL(true)
          setTimeout(() => {
            setTL(false)
          }, TimeOutDuration)
        }
        break
      case 'tc':
        if (!tc) {
          setTC(true)
          setTimeout(() => {
            setTC(false)
          }, TimeOutDuration)
        }
        break
      case 'tr':
        if (!tr) {
          setTR(true)
          setTimeout(() => {
            setTR(false)
          }, TimeOutDuration)
        }
        break
      case 'bl':
        if (!bl) {
          setBL(true)
          setTimeout(() => {
            setBL(false)
          }, TimeOutDuration)
        }
        break
      case 'bc':
        if (!bc) {
          setBC(true)
          setTimeout(() => {
            setBC(false)
          }, TimeOutDuration)
        }
        break
      case 'br':
        if (!br) {
          setBR(true)
          setTimeout(() => {
            setBR(false)
          }, TimeOutDuration)
        }
        break
      default:
        break
    }
  }

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Notifications</h4>
        <p className={classes.cardCategoryWhite}>
          Handcrafted by our friends from{' '}
          <a
            href="https://material-ui-next.com/?ref=''time"
            rel="noreferrer"
            target="_blank"
          >
            Material UI
          </a>{' '}
          and styled by{' '}
          <a
            href="https://www.''-tim.com/?ref=mdr-notifications-page"
            rel="noreferrer"
            target="_blank"
          >
            Tim
          </a>
          . Please checkout the{' '}
          <a href="#pablo" target="_blank">
            full documentation
          </a>
          .
        </p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem md={6} sm={12} xs={12}>
            <h5>Notifications Style</h5>
            <br />
            <SnackbarContent message="This is a plain notification" />
            <SnackbarContent
              close
              message="This is a notification with close button."
            />
            <SnackbarContent
              close
              icon={AddAlert}
              message="This is a notification with close button and icon."
            />
            <SnackbarContent
              close
              icon={AddAlert}
              message={
                // eslint-disable-next-line max-len
                "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
              }
            />
          </GridItem>
          <GridItem md={6} sm={12} xs={12}>
            <h5>Notifications States</h5>
            <br />
            <SnackbarContent
              close
              color="info"
              message={
                'INFO - This is a regular notification made with color="info"'
              }
            />
            <SnackbarContent
              close
              color="success"
              message={
                'SUCCESS - This is a regular notification made with color="success"'
              }
            />
            <SnackbarContent
              close
              color="warning"
              message={
                'WARNING - This is a regular notification made with color="warning"'
              }
            />
            <SnackbarContent
              close
              color="danger"
              message={
                'DANGER - This is a regular notification made with color="danger"'
              }
            />
            <SnackbarContent
              close
              color="primary"
              message={
                'PRIMARY - This is a regular notification made with color="primary"'
              }
            />
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer justify="center">
          <GridItem md={6} sm={12} style={{ textAlign: 'center' }} xs={12}>
            <h5>
              Notifications Places
              <br />
              <small>Click to view notifications</small>
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem lg={8} md={10} sm={12} xs={12}>
            <GridContainer>
              <GridItem md={4} sm={12} xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  onClick={() => showNotification('tl')}
                >
                  Top Left
                </Button>
                <Snackbar
                  close
                  closeNotification={() => setTL(false)}
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={tl}
                  place="tl"
                />
              </GridItem>
              <GridItem md={4} sm={12} xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  onClick={() => showNotification('tc')}
                >
                  Top Center
                </Button>
                <Snackbar
                  close
                  closeNotification={() => setTC(false)}
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={tc}
                  place="tc"
                />
              </GridItem>
              <GridItem md={4} sm={12} xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  onClick={() => showNotification('tr')}
                >
                  Top Right
                </Button>
                <Snackbar
                  close
                  closeNotification={() => setTR(false)}
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={tr}
                  place="tr"
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem lg={8} md={10} sm={12} xs={12}>
            <GridContainer>
              <GridItem md={4} sm={12} xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  onClick={() => showNotification('bl')}
                >
                  Bottom Left
                </Button>
                <Snackbar
                  close
                  closeNotification={() => setBL(false)}
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={bl}
                  place="bl"
                />
              </GridItem>
              <GridItem md={4} sm={12} xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  onClick={() => showNotification('bc')}
                >
                  Bottom Center
                </Button>
                <Snackbar
                  close
                  closeNotification={() => setBC(false)}
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={bc}
                  place="bc"
                />
              </GridItem>
              <GridItem md={4} sm={12} xs={12}>
                <Button
                  color="primary"
                  fullWidth
                  onClick={() => showNotification('br')}
                >
                  Bottom Right
                </Button>
                <Snackbar
                  close
                  closeNotification={() => setBR(false)}
                  color="info"
                  icon={AddAlert}
                  message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                  open={br}
                  place="br"
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  )
}
