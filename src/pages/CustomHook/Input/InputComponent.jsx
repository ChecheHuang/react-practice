import React from 'react'
import { useInput } from './useInput'
function InputComponent() {
    const [valueProps, resetValue] = useInput('')
  return (
    <div style={{marginTop:"20px"}}>
        <input {...valueProps} type="text" />
        <button onClick={()=>{
            alert(valueProps.value)
            resetValue()
        }}>重置</button>
    </div>
  )
}

export default InputComponent