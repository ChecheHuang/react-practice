import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import CustomHook from './pages/CustomHook/CustomHook'
import Ch06 from './pages/LearnReact/Ch06'
import Ch07 from './pages/LearnReact/Ch07'
function App() {
  const data = [
    { path: 'customHook', element: <CustomHook /> },
    { path: 'learnReact/ch06', element: <Ch06 /> },
    { path: 'learnReact/ch07', element: <Ch07 /> },
  ]
  return (
    <>
      <Router>
        {data.map((item, index) => {
          const { path } = item
          return (
            <Link style={{ margin: '10px' }} key={index} to={'/' + path}>
              {path}
            </Link>
          )
        })}

        <Routes>
          {data.map((item, index) => {
            const { path, element } = item
            return (
              <Route key={index} exact path={'/' + path} element={element} />
            )
          })}
        </Routes>
      </Router>
    </>
  )
}

export default App
