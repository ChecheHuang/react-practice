const loadStatus = ()=>{
  console.log("load status")
  throw new Promise(resolves => setTimeout(resolves,2000))
}

function safe(fn){
  try{
    fn()
  }catch(error){
    if(error instanceof Promise){
      error.then(()=>safe(fn))
    }else{
      throw error
    }
  }
}

safe(loadStatus)