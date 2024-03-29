import React, { useEffect, useRef, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  useLocation,
  useNavigation,
  useLoaderData,
  useOutletContext,
  useNavigate,
  useRouteError,
} from 'react-router-dom'
function index() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/loader',
          element: <Loader />,
          loader: dataLoader,
        },
        {
          path: '/context',
          element: <Context />,
        },
        {
          path: '/scroll',
          element: <ScrollToBottom />,
          errorElement: <ErrorBoundary />,
          loader: async () => {
            try {
              const info = await new Promise((resolve) => {
                setTimeout(() => resolve('等了一秒鐘'), 1000)
              })
              return info
            } catch (err) {
              console.log(err)
            }
          },
        },
      ],
    },
    { path: '*', element: <div>404</div> },
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
  const navigation = useNavigation()
  const [info, setInfo] = useState('這是useOutletContext')
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()



  useEffect(()=>{
      console.log(navigation.state)
  },[navigation.state])

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if (token) setIsLogin(true)
    const unnecessaryLoginPath = ['/']
    const isPathNeedLogin = !unnecessaryLoginPath.some(
      (path) => location.pathname === path
    )
    if (!isPathNeedLogin && token) {
      alert('已登入')
      navigate('/loader')
    }
    if (isPathNeedLogin && !token) {
      alert('尚未登入')
      navigate('/')
    }
  }, [location.pathname, navigate])
  const handleLogin = () => {
    setIsLogin(true)
    localStorage.setItem('userToken', 'token')
    navigate('/context')
    alert('登入成功')
  }

  const handleLogout = () => {
    setIsLogin(false)
    localStorage.removeItem('userToken')
    navigate('/')
  }

  return (
    <>
      <header style={style.headerStyle}>
        <NavLink to="/" style={style.activeStyle}>
          home
        </NavLink>
        <NavLink to="loader" style={style.activeStyle}>
          loader
        </NavLink>
        <NavLink to="context" style={style.activeStyle}>
          context
        </NavLink>
        <NavLink
          to="/scroll"
          state={location.pathname === '/context' ? 'scroll' : ''}
          style={style.activeStyle}
        >
          scroll
        </NavLink>
        {isLogin ? (
          <div>
            <button onClick={handleLogout}>登出</button>
          </div>
        ) : (
          '尚未登入'
        )}
        <div>
          <div>context資料</div>
          <div>{info}</div>
        </div>
      </header>
      <div style={style.containerStyle}>
        <aside style={style.asideStyle}>aside</aside>
        <div style={style.outletStyle}>
          {navigation.state === 'loading' ? (
            <div>navigation.state===loading時token前執行的loading</div>
          ) : (
            <Outlet context={{ info, setInfo, handleLogout, handleLogin }} />
          )}
        </div>
      </div>
    </>
  )
}

function Home() {
  const { handleLogin } = useOutletContext()

  return (
    <div>
      <div>home</div>
      <button onClick={handleLogin}>登入</button>
    </div>
  )
}

const dataLoader = async () => {
  const res = await fetch('https://random.dog/woof.json')
  const img = await res.json()
  return img.url
}
function Loader() {
  const img = useLoaderData()
  return (
    <div>
      <h1>
        Loader
        <br />
        {img}
      </h1>
    </div>
  )
}
function Context() {
  const { info, setInfo } = useOutletContext()
  return (
    <>
      <div>context</div>
      <label htmlFor="">改變context資料</label>
      <input
        type="text"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
    </>
  )
}

function ScrollToBottom() {
  const scrollRef = useRef()
  const location = useLocation()
  const info = useLoaderData()

  useEffect(() => {
    if (location.state !== 'scroll') return
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
    }
  }, [])
  return (
    <div style={style.scrollContainerStyle}>
      <div ref={scrollRef} style={style.scrollInsideStyle}>
        獲取資料為：{info}
      </div>
    </div>
  )
}
function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)
  return <div>{error.message}</div>
}

const style = {
  headerStyle: {
    width: '100vw',
    height: '100px',
    background: 'lightgray',
    display: 'flex',
    gap: '10px',
  },
  containerStyle: {
    width: '100vw',
    height: 'calc(100vh - 100px)',
    display: 'flex',
    asideStyle: {
      background: 'lightgreen',
      width: '100px',
    },
  },
  asideStyle: {
    background: 'lightgreen',
    width: '100px',
  },
  outletStyle: {
    flex: 1,
    height: '100%',
    overflowY: 'scroll',
  },
  activeStyle: ({ isActive }) =>
    isActive
      ? {
          color: 'red',
        }
      : {
          color: 'green',
        },
  scrollContainerStyle: {
    width: '200px',
    height: '400px',
    backgroundColor: '#bbdefb',
    margin: 'auto',
    overflowY: 'scroll',
  },
  scrollInsideStyle: {
    height: '1400px',
  },
}
