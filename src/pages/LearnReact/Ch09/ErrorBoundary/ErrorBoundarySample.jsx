import React from 'react'
import { css } from '@emotion/react'
import ErrorBoundary from './ErrorBoundary'
import ErrorScreen from './ErrorScreen'
const BreakThing = () => {
  throw new Error('we intentionally broke something')
}
function Menu() {
  return (
    <>
      <div
        css={css`
          width: 200px;
          height: 100vh;
          background-color: lightgreen;
        `}
      >
        Menu
        <BreakThing />
      </div>
    </>
  )
}
function CallOut() {
  return (
    <div
      css={css`
        border: 2px solid black;
        padding: 20px;
        width: 80%;
        text-align: center;
      `}
    >
      callout
    </div>
  )
}

function Content() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        width: 700px;
        flex-direction: column;
      `}
    >
      <CallOut />
      test
    </div>
  )
}

function ErrorBoundarySample() {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <ErrorBoundary>
        <Menu />
      </ErrorBoundary>

      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
    </div>
  )
}

export default ErrorBoundarySample
