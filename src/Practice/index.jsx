import React, { useEffect, useRef, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  useLocation,
} from 'react-router-dom'
function index() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <div>home</div>,
        },
        {
          path: '/page1',
          element: <div>page1</div>,
        },
        {
          path: '/page2',
          element: <div>page2</div>,
        },
        {
          path: '/scroll',
          element: <ScrollToBottom />,
        },
      ],
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default index

function Root() {
  const location = useLocation()
  const isScroll = location.pathname === '/page2'

  const headerStyle = {
    width: '100vw',
    height: '100px',
    background: 'lightgray',
  }
  const containerStyle = {
    width: '100vw',
    height: 'calc(100vh - 100px)',
    display: 'flex',
  }
  const asideStyle = {
    background: 'lightgreen',
    width: '100px',
  }
  const outletStyle = {
    flex: 1,
    height: '100%',
    overflowY: 'scroll',
  }
  const activeStyle = ({ isActive }) =>
    isActive
      ? {
          color: 'red',
        }
      : {
        color:'green'
      }
 

  return (
    <>
      <header style={headerStyle}>
        <NavLink to="/" style={activeStyle}>
          home
        </NavLink>
        <NavLink to="page1" style={activeStyle}>
          page1
        </NavLink>
        <NavLink to="page2" style={activeStyle}>
          page2
        </NavLink>
        <NavLink
          to="/scroll"
          state={isScroll ? 'scroll' : ''}
          style={activeStyle}
        >
          scroll
        </NavLink>
      </header>
      <div style={containerStyle}>
        <aside style={asideStyle}>aside</aside>
        <div style={outletStyle}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

function ScrollToBottom() {
  const [isLoading, setIsLoading] = useState(true)
  const scrollRef = useRef()
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
    }
    setIsLoading(true)
    await fetchPromise()
    setIsLoading(false)
  }

  function fetchPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('loading'), 1000)
    })
  }

  const containerStyle = {
    width: '200px',
    height: '400px',
    backgroundColor: 'gray',
    margin: 'auto',
    overflowY: 'scroll',
  }
  const insideStyle = {
    height: '1400px',
  }

  useEffect(() => {
    if (isLoading) return
    if (location.state !== 'scroll') return
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
    }
  }, [isLoading])
  if (isLoading) {
    return <div>loading.....</div>
  }
  return (
    <div style={containerStyle}>
      <div ref={scrollRef} style={insideStyle}>
        practice
      </div>
    </div>
  )
}
