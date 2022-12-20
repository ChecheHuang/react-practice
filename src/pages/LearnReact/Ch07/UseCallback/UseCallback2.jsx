import React, { useEffect, useState, useCallback } from 'react'

const useAnyKeyToRender = () => {
  const [, forceRender] = useState()

  useEffect(() => {
    window.addEventListener('keydown', forceRender)
    return () => window.removeEventListener('keydown', forceRender)
  }, [])
}

function WordCount({ children = '' }) {
  useAnyKeyToRender()

  const fn = useCallback(() => {
    console.log('我是useCallback包起來的fn')
  }, [])

  useEffect(() => {
    console.count('useEffect裡面相依於fn()，但在rerender時因為fn有使用useCallback包起來，所以只會做一次')
    fn()
  }, [fn])

  return <p>{children}</p>
}

export default function UseCallback2() {
  return <WordCount>有用UseCallback1</WordCount>
}
