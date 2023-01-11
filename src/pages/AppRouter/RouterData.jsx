import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
function RouterData() {
  const img = useLoaderData()

  // const [img, setImg] = useState()
  // useEffect(() => {
  //   fetch('https://random.dog/woof.json')
  //     .then((data) => {
  //       return data.json()
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       setImg(data.url)
  //     })
  //   dataLoader('https://random.dog/woof.json')
  // }, [])
  return (
    <div>
      RouterData
      <br/>
      {img}
    </div>
  )
}

 export const dataLoader = async () => {
   const res = await fetch('https://random.dog/woof.json')
   const img = await res.json()
   
   return img.url
 }

export default RouterData

// fetch(uri)
//   .then((data) => {
//     if (!mounted.current) throw new Error('component is not mounted')
//     return data
//   })
//   .then((data) => data.json())
//   .then(setData)
//   .then(() => setLoading(false))
//   .catch((error) => {
//     if (!mounted.current) return
//     setError(error)
//   })
