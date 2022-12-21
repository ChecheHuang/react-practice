import React, { lazy } from 'react'
import Home from '../pages/Home'
import Loading from '../components/Loading'
const CustomHook = lazy(() => import('../pages/CustomHook/CustomHook'))
const Ch06 = lazy(() => import('../pages/LearnReact/Ch06'))
const Ch07 = lazy(() => import('../pages/LearnReact/Ch07'))
const Ch08 = lazy(() => import('../pages/LearnReact/Ch08'))
const Ch09 = lazy(() => import('../pages/LearnReact/Ch09'))
const Ch10 = lazy(() => import('../pages/LearnReact/Ch10'))
const withLoadingComponent = (comp) => (
  <React.Suspense fallback={<Loading/>}>{comp}</React.Suspense>
)

const data = [
  { path: 'customHook', element: <CustomHook /> },
  { path: 'learnReact/ch06', element: <Ch06 /> },
  { path: 'learnReact/ch07', element: <Ch07 /> },
  { path: 'learnReact/ch08', element: <Ch08 /> },
  { path: 'learnReact/ch09', element: <Ch09 /> },
  { path: 'learnReact/ch10', element: <Ch10 /> },
]
const newData = data.map((item)=>{
    const {path,element}=item
    const newItem ={}
    newItem.path="/"+path
    newItem.element=withLoadingComponent(element)
    return newItem
})

const routes = [
  { path: '/', element: <Home /> },
  {
    path: '/',
    element: <Home />,
    children: newData,
  },
]

export default routes
