import React, { useEffect, useRef } from 'react'

function index() {
  const scrollRef=useRef()

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
    }
  },[])
  return (
    <div
      ref={scrollRef}
      style={{
        height: '200vh',
      }}
    >
      <div style={{
        position:"absolute",
        top:"190vh"
      }}>practice</div>
    </div>
  )
}

export default index