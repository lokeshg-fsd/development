// @flow

import { useMemo } from 'react'

import type { HeaderBarItem, HeaderBarMenuItem } from '../types'
import { HEADER_ITEMS } from '../menuItems'

export default function useReportDefinitions(
  currentUser?: *,
  settings?: $ReadOnlyArray<Setting>,
  reportDefinitions?: $ReadOnlyArray<string>,
) {
  const headerItems = useMemo<$ReadOnlyArray<HeaderBarItem>>(() => {
    const filterMenuItem = (
      item: HeaderBarItem,
      menuItem: HeaderBarMenuItem,
    ) => {
      if (reportDefinitions.length > 0 && ['home'].includes(menuItem.id)) {
        return true
      }

      return true
    }

    return HEADER_ITEMS.map((item) => {
      const menuItemsArray = item.menuItems.filter((menuItem) =>
        filterMenuItem(item, menuItem),
      )

      const headerItem = { ...item }

      headerItem.menuItems = menuItemsArray

      return headerItem
    }).filter((headerItem) => headerItem.menuItems.length > 0)
  }, [reportDefinitions])

  return [headerItems, currentUser]
}
