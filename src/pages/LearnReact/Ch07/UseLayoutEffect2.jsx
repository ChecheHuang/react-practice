import React, { useState, useLayoutEffect } from 'react'

function useWindowSize() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return [width, height]
}

export default function UseLayoutEffect2() {
  const [w, h] = useWindowSize()
  return (
    <div>
      在瀏覽器繪圖前就取得
      {w}x{h}
    </div>
  )
}
