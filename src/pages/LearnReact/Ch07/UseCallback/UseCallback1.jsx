import React, { useEffect, useState, useMemo } from 'react'

const useAnyKeyToRender = () => {
  const [, forceRender] = useState()

  useEffect(() => {
    window.addEventListener('keydown', forceRender)
    return () => window.removeEventListener('keydown', forceRender)
  }, [])
}

function WordCount({ children = '' }) {
  useAnyKeyToRender()

  const fn = () => {
    console.count('我是fn')
  }

  useEffect(() => {
    console.count('useEffect裡面相依於fn()，但在rerender每次都會被執行')
    fn()
  }, [fn])

  return <p>{children}</p>
}

export default function UseCallback1() {
  return <WordCount>沒有用UseCallback1</WordCount>
}
