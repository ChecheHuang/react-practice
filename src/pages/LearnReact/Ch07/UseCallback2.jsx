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
    console.log('我在useEffect被呼叫，但是用useCallback包起來，')
  }, [])

  useEffect(() => {
    console.log('UseCallback2因為fn的rerender')
    fn()
  }, [fn])

  return <p>{children}</p>
}

export default function UseCallback2() {
  return <WordCount>有用UseCallback1</WordCount>
}
