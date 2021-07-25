/* eslint-disable import/no-unresolved */
// @flow

import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { AppBar, Toolbar } from '@material-ui/core'

import {
  customIOSAppLinkSelector,
  showIphoneAppButton,
} from 'common/selectors/settings'
import type { Setting } from 'common/types/setting'
import Logo from 'common/components/icons/Logo'
import NavMenu from 'common/components/navmenu/NavMenu'
import Products from 'common/constants/products'
import mainAppBarTheme from 'common/themes/mainAppBar'
import largeOrGreater from 'common/selectors/viewport/largeOrGreater'
import useWindowResize from 'common/hooks/useWindowResize'
import { close } from 'common/actions/navMenu'

import { HEADER_TITLE } from '../menuItems'
import type { HeaderBarItem } from '../types'
import HeaderItem from './HeaderItem'
import NavItem from './NavItems'
import styles from './styles.scss'

type Props = {
  currentUser: *,
  gridEditEnabled: boolean,
  headerItems: $ReadOnlyArray<HeaderBarItem>,
  isDataInitialized: boolean,
  onClose: () => *,
  settings: $ReadOnlyArray<Setting>,
  version: string,
}

function HeaderBar({
  currentUser,
  onClose,
  isDataInitialized,
  gridEditEnabled,
  headerItems,
  settings,
  version,
}: Props) {
  const extended = useWindowResize<boolean>(largeOrGreater)

  const { pathname } = useLocation()

  const handleOnHeaderItemChange = () => {
    onClose()
  }

  const NavItems = () => (
    <div className={styles.navItem}>
      {headerItems.map((item) => (
        <NavItem
          key={item.id}
          Icon={item.navIcon}
          isOpen={Boolean(
            item.menuItems.find((menuItem) =>
              menuItem.routes.find(
                (route) => route.path.toLowerCase() === pathname.toLowerCase(),
              ),
            ),
          )}
          menuItemsArray={item.menuItems}
          name={item.navName}
          onHeaderItemChange={handleOnHeaderItemChange}
        />
      ))}
    </div>
  )

  return (
    <ThemeProvider theme={mainAppBarTheme}>
      <AppBar
        className={isDataInitialized ? styles.base : styles.baseDisabled}
        position="sticky"
      >
        <Toolbar classes={{ root: styles.root }}>
          <Logo product={HEADER_TITLE} />
          <div
            className={classNames(styles.headerItemContainer, {
              [styles.navItemsDisabled]: gridEditEnabled,
            })}
          >
            {extended &&
              headerItems.map((item) => (
                <HeaderItem
                  key={item.id}
                  id={item.id}
                  menuItems={item.menuItems}
                  name={item.name}
                  onHeaderItemChange={handleOnHeaderItemChange}
                  selected={Boolean(
                    item.menuItems.find((menuItem) =>
                      menuItem.routes.find(
                        (route) =>
                          route.path.toLowerCase() === pathname.toLowerCase(),
                      ),
                    ),
                  )}
                />
              ))}
          </div>
          <div
            className={classNames({
              [styles.navMenuContainer]: true,
              [styles.navItemsDisabled]: gridEditEnabled,
            })}
          >
            <NavMenu
              currentUser={currentUser}
              customIOSAppLink={customIOSAppLinkSelector(settings)}
              isIOSAppEnabled={showIphoneAppButton(settings)}
              navItems={extended ? null : NavItems}
              selectedProduct={Products.REPORTS_BETA}
              version={version}
            />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(close()),
})

const mapStateToProps = ({
  configLoader: { isDataInitialized },
  tools: { gridEditEnabled },
}) => ({
  gridEditEnabled,
  isDataInitialized,
})

export default compose(
  connect<*, *, _, _, _, _>(mapStateToProps, mapDispatchToProps),
)(HeaderBar)
