import React, { useReducer } from 'react'

function Numbers() {
  const [number, setNumber] = useReducer((number, newNumber) => {
    console.log('number', number)
    console.log('newNumber', newNumber)
    return number + newNumber
  }, 0)

  return <button onClick={() => setNumber(1)}>按下去+{number}</button>
}

export default function UseReducer3() {
  return <Numbers />
}
