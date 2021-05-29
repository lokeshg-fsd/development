// @flow
import { type ComponentType } from 'react'

export type Route = {
  component: ComponentType<*>,
  id: string,
  path: string,
}

export type HeaderBarMenuItem = {
  id: string,
  name: string,
  key: $ReadOnlyArray<string>,
  routes: $ReadOnlyArray<Route>,
}

export type HeaderBarItem = {
  name: string,
  id: string,
  menuItems: $ReadOnlyArray<HeaderBarMenuItem>,
  navName: string,
  navIcon: ComponentType<*>,
}
