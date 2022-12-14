import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import routes from '../router'
function Home() {
  const childrenRoutes = routes[1].children
  return (
    <div>
      <div>
        {childrenRoutes.map((item, index) => {
          const { path } = item
          return (
            <Link key={index} style={{ margin: '20px' }} to={path}>
              {path.replace(/\//g, '')}
            </Link>
          )
        })}
      </div>
      <Outlet />
    </div>
  )
}

export default Home
