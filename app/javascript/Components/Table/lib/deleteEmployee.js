// @flow

import { DestroyPersonAPI } from '../../Data/index'

async function deleteEmployee(email: string) {
  const url = DestroyPersonAPI + email

  const response = await fetch(url)
  const json = await response.json()

  return json
}

export default deleteEmployee
