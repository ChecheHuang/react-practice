# Ch09

## ErrorBoundary 和 Suspense
[ErrorBoundary](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries)*用來處理各字元件錯誤*
[Suspense](https://reactjs.org/docs/react-api.html#suspense)*lazyLoad*

目前只有class component寫法如下
```javascript !=
// ErrorBoundary.jsx
import React, { Component } from 'react'

function ErrorScreen({ error }) {
  return (
    <div>
      有東西錯啦!!!!!!!!!
      <h3> {error.message}</h3>
    </div>
  )
}

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    const { error } = this.state
    const { children, Fallback } = this.props
    if (error && !Fallback) return <ErrorScreen error={error} />
    if (error) return <Fallback error={error} />
    return children
  }
}
```
``` javascript !=
import React from 'react'
//todo 成功
//   const loadStatus = () => 'success - ready'
//todo 失敗
//   const loadStatus = () => {
//     throw new Error('something went wrong')
//   }
//todo 等待
// const loadStatus = () => {
//     console.log("load status")
//   throw new Promise((resolves) => setTimeout(resolves, 3000))
// }
//todo寫活

const loadStatus = (function () {
  let error, response

  const promise = new Promise((resolves) => setTimeout(resolves, 1000))
    .then(() => (response = 'success'))
    .catch((e) => (error = e))

  return function () {
    if (error) throw error
    if (response) return response
    throw promise
  }
})()

function Main() {
  const status = loadStatus()
  return <h1>status:{status}</h1>
}
export default Main

```
## 使用方法
``` javascript !=
import React, { useReducer, lazy, Suspense } from 'react'
const Main = lazy(() => import('./Main'))
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
function SuspenseSample() {
  const [agree, toggle] = useReducer((agree) => !agree, false)

  if (!agree) {
    return (
      <div>
        <input id="check" type="checkbox" value={agree} onChange={toggle} />
        <label htmlFor="check">check</label>
      </div>
    )
  }
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div>loading.....</div>}>
          <Main />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default SuspenseSample

```