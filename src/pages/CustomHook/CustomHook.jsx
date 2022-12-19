import React from 'react'
import Toggle from './Toggle/ToggleComponent'
import TimeComponent from './Timeout/TimeComponent'
import DebounceComponent from './Debounce/DebounceComponent'
import UpdateEffectComponent from './UpdateEffect/UpdateEffectComponent'
import ArrayComponent from './Array/ArrayComponent'
import InputComponent from './Input/InputComponent'

function CustomHook() {
  return (
    <>
      <Toggle />
      <TimeComponent />
      <DebounceComponent />
      <UpdateEffectComponent />
      <ArrayComponent />
      <InputComponent />
    </>
  )
}

export default CustomHook
