import React, { useState, useEffect } from 'react'

const useAnyKeyToRender = () => {
  const [, forceRender] = useState()

  useEffect(() => {
    window.addEventListener('keydown', forceRender)
    return () => window.removeEventListener('keydown', forceRender)
  }, [])
}

function WordCount({ children = '' }) {
  useAnyKeyToRender()

  const words = children.split(' ')

  useEffect(() => {
    console.count('依賴words的useEffect')
  }, [words])

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>字數長度{words.length} </strong>
      </p>
    </>
  )
}

export default function LearnUseEffect() {
  return <WordCount>這邊沒有useMemo</WordCount>
}
