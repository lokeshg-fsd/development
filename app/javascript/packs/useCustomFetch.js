// @flow

import { useState, useEffect, useRef } from 'react'
import isEqual from 'lodash/isEqual'

function useCustomFetch(url: string) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [isReload, setIsReload] = useState<boolean>(true)
  const urlRef = useRef<string>(url)

  async function customFetch(api) {
    try {
      const response = await fetch(api)
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
    if (isReload) {
      urlRef.current = url
      reload()
    }
  }, [isReload, url])

  useEffect(() => {
    if (isReload) {
      if (url) {
        customFetch(url)
      }
    }
  }, [url, isReload])

  return [data, loading, reload, error]
}

export default useCustomFetch
