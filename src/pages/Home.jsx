import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ width: '100%', height: '50px', background: 'gray' }}>
      <Link to="/customHook">CustomHook</Link>
    </div>
  )
}

export default Home
