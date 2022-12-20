import React, { useEffect, useLayoutEffect } from 'react'

export default function UseLayoutEffect1() {
  console.log('React元件樹渲染')
  useEffect(() => console.log('useEffect執行在React瀏覽器更新的Dom後'))
  useLayoutEffect(() =>
    console.log('useLayoutEffect執行在React瀏覽器更新的Dom前')
  )
  return <div>React瀏覽器更新的Dom</div>
}
