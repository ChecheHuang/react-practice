import React from 'react'

function ErrorScreen({ error }) {
  return (
    <div>
      有東西錯啦!!!!!!!!!
      <h3> {error.message}</h3>
    </div>
  )
}

export default ErrorScreen
