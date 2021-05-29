// @flow

import { newEmployeeAPI } from '../../Data/index'

async function createEmployee(options: *) {
  const response = await fetch(newEmployeeAPI, options)
  const json = await response.json()

  return json
}

export default createEmployee
