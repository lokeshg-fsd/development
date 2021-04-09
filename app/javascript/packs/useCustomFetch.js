// @flow

import { useState, useEffect, useRef } from 'react'
import isEqual from 'lodash/isEqual'

import { getCSRFFetchOptions } from 'common/lib/csrf'
import { CONTENT_TYPE_JSON, POST } from 'reports/constants/OSConstants'

function useCustomFetch(url: string, params?: *) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [isReload, setIsReload] = useState<boolean>(true)
  const urlRef = useRef<string>(url)
  const paramsRef = useRef<*>(params)

  async function customFetch(api, options) {
    try {
      const response = options ? await fetch(api, options) : await fetch(api)
      const responseData = await response.json()

      setIsReload(false)
      setData(responseData)
      setLoading(false)
    } catch (err) {
      setIsReload(false)
      setError(err)
      setLoading(false)
    }
  }

  function reload() {
    setLoading(true)
    setIsReload(true)
  }

  useEffect(() => {
    if (
      isReload ||
      urlRef.current !== url ||
      !isEqual(params, paramsRef.current)
    ) {
      paramsRef.current = params
      urlRef.current = url
      reload()
    }
  }, [isReload, params, url])

  useEffect(() => {
    if (isReload) {
      if (url) {
        const options = params
          ? getCSRFFetchOptions({
              method: POST,
              headers: { 'Content-Type': CONTENT_TYPE_JSON },
              body: JSON.stringify(params),
            })
          : null

        customFetch(url, options)
      }
    }
  }, [url, isReload, params])

  return [data, loading, reload, error]
}

export default useCustomFetch
