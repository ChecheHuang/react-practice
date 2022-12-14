import React from 'react'
import ColorProvider from './ColorProvider'
import ColorList from './ColorList'
import AddColorForm from './AddColorForm'
function Ch06() {
  return (
    <ColorProvider>
      <AddColorForm />
      <ColorList />
    </ColorProvider>
  )
}

export default Ch06
