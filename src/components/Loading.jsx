import React from 'react'
import Lottie from "lottie-react";
import loading from "./loading.json";
function Loading() {
  return (
    <div style={{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Lottie animationData={loading} loop={true} />
    </div>
  )
}

export default Loading