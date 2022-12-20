import React, { useState, useLayoutEffect } from 'react'

function useMousePosition() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const setPosition = ({ x, y }) => {
    setX(x)
    setY(y)
  }

  useLayoutEffect(() => {
    window.addEventListener('mousemove', setPosition)
    return () => window.removeEventListener('mousemove', setPosition)
  }, [])

  return [x, y]
}

export default function UseLayoutEffect3() {
  const [left, top] = useMousePosition()
  return (
    <div style={{ position: 'absolute', top:top+200, left:left+200, cursor: 'cursor' }}>
      在瀏覽器繪圖前就取得
      {top}x{left}
    </div>
  )
}
