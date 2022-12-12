import React from 'react'
import ColorProvider from './ColorProvider'
import colorData from "./color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
function LearnReact() {
  return (
    <ColorProvider>
   <AddColorForm />
      <ColorList />

    </ColorProvider>
  )
}

export default LearnReact