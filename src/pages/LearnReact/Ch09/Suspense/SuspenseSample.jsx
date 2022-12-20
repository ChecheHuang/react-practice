import React, { useReducer, lazy, Suspense } from 'react'
// import Main from './Main'
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
    <ErrorBoundary>
      <Suspense fallback={<div>loading.....</div>}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  )
}

export default SuspenseSample
