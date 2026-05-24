'use client'

import { useState, useEffect } from 'react'

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            ...options.headers
          },
          ...options
        })
        const json = await res.json()
        setData(json)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, error }
}