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

  const words = useMemo(() => children.split(' '), [children])

  useEffect(() => {
    console.count('用了useMemo')
  }, [words])

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>字數長度{words.length}</strong>
      </p>
    </>
  )
}

export default function LearnUseMemo() {
  return <WordCount>這邊用了useMemo</WordCount>
}
