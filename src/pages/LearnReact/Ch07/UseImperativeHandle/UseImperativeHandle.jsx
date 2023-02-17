import React, { forwardRef, useImperativeHandle, useReducer, useRef } from 'react'

function UseImperativeHandle() {
  const customInputRef = useRef(null)
  const handleGetInputValue = () => {
    console.log(customInputRef.current.value)
  }
  const forwardRefChildrenRef = useRef(null)
  const handleGetForwardRefChildrenValue = () => {
    console.log(forwardRefChildrenRef.current.user)
  }
  return (
    <div>
      <h1>ForwardRef</h1>
      <ForwardRef ref={customInputRef} />
      <button onClick={handleGetInputValue}>get input value</button>
      <h1>UseImperativeHandle</h1>
  

      <ForwardRefChildren ref={forwardRefChildrenRef} />
      <button onClick={handleGetForwardRefChildrenValue}>
        get ForwardRefChildren value
      </button>
    </div>
  )
}
const ForwardRef = forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref} />
    </>
  )
})
const ForwardRefChildren = forwardRef((props, ref) => {
     const [user, setUser] = useReducer(
       (user, newDetails) => {
         return { ...user, ...newDetails }
       },
       {
        name:"",
        email:"",
        age:""
       }
     )
  useImperativeHandle(
    ref,
    () => ({
      user
    }),
    [user.name, user.email, user.age]
  )
  return (
    <>
      <h1>ForwardRefChildren</h1>
      <input
        value={user.name}
        onChange={(e) => setUser({ name: e.target.value })}
        type="text"
      />
      <input
        value={user.email}
        onChange={(e) => setUser({ email: e.target.value })}
        type="text"
      />
      <input
        value={user.age}
        onChange={(e) => setUser({ age: e.target.value })}
        type="text"
      />
    </>
  )
})
export default UseImperativeHandle
