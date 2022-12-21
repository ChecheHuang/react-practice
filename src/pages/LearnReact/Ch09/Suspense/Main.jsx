import React from 'react'

//todo 成功
//   const loadStatus = () => 'success - ready'
//todo 失敗
//   const loadStatus = () => {
//     throw new Error('something went wrong')
//   }
//todo 等待
// const loadStatus = () => {
//     console.log("load status")
//   throw new Promise((resolves) => setTimeout(resolves, 3000))
// }
//todo寫活

const loadStatus = (function () {
  let error, response

  const promise = new Promise((resolves) => setTimeout(resolves, 1000))
    .then(() => (response = 'success'))
    .catch((e) => (error = e))

  return function () {
    if (error) throw error
    if (response) return response
    throw promise
  }
})()

function Main() {
  const status = loadStatus()

  return <h1>status:{status}</h1>
}

export default Main
