// @flow
import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'

// material-ui components
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// core components
import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'

import styles from 'assets/jss/material-dashboard-react/components/customTabsStyle'

const useStyles = makeStyles(styles)

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const classes = useStyles()
  const { headerColor, plainTabs, tabs, title, rtlActive } = props
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  })

  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title === undefined && <div className={cardTitle}>{title}</div>}
        <Tabs
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          onChange={handleChange}
          scrollButtons="auto"
          value={value}
          variant="scrollable"
        >
          {tabs.map((prop, key) => {
            let icon = {}

            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              }
            }

            return (
              <Tab
                key={key}
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                label={prop.tabName}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...icon}
              />
            )
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>
          }

          return null
        })}
      </CardBody>
    </Card>
  )
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose',
  ]),
  plainTabs: PropTypes.bool,
  rtlActive: PropTypes.bool,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabContent: PropTypes.node.isRequired,
      tabIcon: PropTypes.object,
      tabName: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string,
}
