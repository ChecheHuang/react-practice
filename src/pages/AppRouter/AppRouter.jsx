import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Outlet,
  Route,
  Link,
  RouterProvider,
} from 'react-router-dom'
import RouterData, { dataLoader } from './RouterData'
import RouterHome from './RouterHome'
import RouterContact from './RouterContact'
function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Root />}>
        <Route index element={<RouterHome />} />
        <Route path="/routerContact" element={<RouterContact />} />
        <Route
          path="/routerData"
          element={<RouterData />}
          loader={dataLoader}
        />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  )
}

export default AppRouter
const Root = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '10px',marginBottom:"20px" }}>
        <Link to="/">RouterHome</Link>
        <Link to="/routerContact">routerContact</Link>
        <Link to="/routerData">routerData</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
