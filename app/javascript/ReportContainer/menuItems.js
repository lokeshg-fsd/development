// @flow

import PeopleIcon from '@material-ui/icons/People'

import type { HeaderBarItem } from './types'

import Report from '../Components/Table'

export const HEADER_TITLE = 'REPORTS'

export const PEOPLE_ITEM_ID = 'people'
export const PEOPLE_MANAGER_MENU_ITEM_ID = 'PeopleManager'
export const REAL_ESTATE_ITEM_ID = 'RealEstate'
export const REAL_ESTATE_PORTFOLIO_ITEM_ID = 'Portfolio'
export const REAL_ESTATE_ANNUAL_COST_ITEM_ID = 'AnnualCosts'
export const GROWTH_FORECAST_MENU_ITEM_ID = 'GrowthForecast'
export const DESK_BOOKING_ITEM_ID = 'DeskBooking'
export const NEIGHBORHOOD_ITEM_ID = 'Neighborhood'
export const NEIGHBORHOOD_CAPTAINS_ITEM_ID = 'NeighborhoodCaptains'
export const SEATING_NEED_ITEM_ID = 'SeatingNeed'

export const DEFAULT_MENU_ITEM_ID = PEOPLE_MANAGER_MENU_ITEM_ID

export const HEADER_ITEMS: $ReadOnlyArray<HeaderBarItem> = [
  {
    name: 'PEOPLE',
    id: PEOPLE_ITEM_ID,
    navName: 'People',
    navIcon: PeopleIcon,
    menuItems: [
      {
        id: PEOPLE_MANAGER_MENU_ITEM_ID,
        name: 'People',
        key: ['REPORT_DEFINITIONS.REPORT_COLUMNS_PEOPLE_MANAGER'],
        routes: [
          {
            id: 'REPORT_DEFINITIONS.REPORT_COLUMNS_PEOPLE_MANAGER',
            path: '/people/people_manager',
            component: Report,
          },
        ],
      },
    ],
  },
]

export function getRouteById(routeId: string): string {
  let routePath = ''

  HEADER_ITEMS.every((headerItem) =>
    headerItem.menuItems.every((menuItem) =>
      menuItem.routes.every((route) => {
        if (route.id === routeId) {
          routePath = route.path

          return false
        }

        return true
      }),
    ),
  )

  return routePath
}
