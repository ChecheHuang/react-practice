import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Outlet,
  Route,
  Link,
  RouterProvider,
  useNavigation,
} from 'react-router-dom'
import RouterData, { dataLoader } from './RouterData'
import RouterHome from './RouterHome'
import RouterContact from './RouterContact'
function AppRouter() {
  // const router = createBrowserRouter(
  //   createRoutesFromChildren(
  //     <Route path="/" element={<Root />}>
  //       <Route index element={<RouterHome />} />
  //       <Route path="/routerContact" element={<RouterContact />} />
  //       <Route
  //         path="/routerData"
  //         element={<RouterData />}
  //         loader={dataLoader}
  //       />
  //     </Route>
  //   )
  // )

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <div>error</div>,
      children: [
        {
          path: '/',
          element: <RouterHome />,
        },
        {
          path: '/routerContact',
          element: <RouterContact />,
        },
        {
          path: '/routerData',
          element: <RouterData />,
          loader: dataLoader,
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
const Root = () => {
   const navigation = useNavigation()
  return (
    <>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to="/">RouterHome</Link>
        <Link to="/routerContact">routerContact</Link>
        <Link to="/routerData">routerData</Link>
      </div>
      <div>
        {navigation.state === 'loading'? <div>loading</div>:<Outlet />}
      </div>
    </>
  )
}
export default AppRouter
