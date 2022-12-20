import React, { useState } from 'react'

function Checkbox() {
  const [checked, setChecked] = useState(false)

  function toggle() {
    setChecked((checked) => !checked)
  }

  return (
    <>
      <div>這邊用useState</div>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
    </>
  )
}

export default function UseReducer1() {
  return <Checkbox />
}
