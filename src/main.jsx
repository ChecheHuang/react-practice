import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppRouter from './pages/AppRouter/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )
ReactDOM.createRoot(document.getElementById('root')).render(
    <AppRouter />
)
