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
    console.log('我在useEffect被呼叫')
  }

  useEffect(() => {
    console.log('UseCallback1因為fn的rerender')
    fn()
  }, [fn])

  return <p>{children}</p>
}

export default function UseCallback1() {
  return <WordCount>沒有用UseCallback1</WordCount>
}
