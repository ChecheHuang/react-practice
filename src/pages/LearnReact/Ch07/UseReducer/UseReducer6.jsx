import React, { useReducer } from 'react'

const initialState = {
  id: '0391-3233-3201',
  firstName: 'Bill',
  lastName: 'Wilson',
  city: 'Missoula',
  state: 'Montana',
  email: 'bwilson@mtnwilsons.com',
  admin: false,
}

function User() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  )

  return (
    <div>
      <h1>
        {state.firstName} {state.lastName} - {state.admin ? 'Admin' : 'User'}
      </h1>
      <p>Email: {state.email}</p>
      <p>
        Location: {state.city}, {state.state}
      </p>
      <button onClick={() => setState({ admin: true })}>Make Admin</button>
    </div>
  )
}

export default function UseReducer6() {
  return <User />
}
