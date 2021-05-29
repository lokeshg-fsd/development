// FIXME: @noflow

import merge from 'lodash/merge'

export function getCSRFToken() {
  const header = document.querySelector('meta[name="csrf-token"]')

  return header && header.content
}

export function getCSRFHeader() {
  return {
    'X-CSRF-Token': getCSRFToken(),
  }
}

export function getCSRFFetchOptions(fetchOptions) {
  return merge({}, fetchOptions, {
    credentials: 'same-origin',
    headers: getCSRFHeader(),
  })
}
