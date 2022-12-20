import React, { memo, useState } from 'react'

const Cat = ({ name }) => {
  console.log('rendering', name)
  return <p> {name} </p>
}
const PureCat = memo(Cat)
const PureCat2 = memo(Cat,(prevProps,nextProps)=>prevProps.name===nextProps.name)



//決斷函示
const RenderCatOnce=memo(Cat,()=>true)
const AlwaysRenderCat=memo(Cat,()=>false)

function PureComponent() {
  const [cats, setCats] = useState(['cat1', 'cat2', 'cat3', 'cat4'])
  return (
    <>
      {cats.map((name, index) => {
        {/* return <PureCat name={name} key={index} /> */}
        {/* return <PureCat name={name} key={index} meow={name=>console.log(`${name} has meowed!`)}  /> */}
        return <PureCat2 name={name} key={index} meow={name=>console.log(`${name} has meowed!`)}  />
        return <Cat name={name} key={index} />
      })}
      <button
        onClick={() => {
          setCats([...cats, prompt('Name a cat')])
        }}
      >
        add a cat
      </button>
    </>
  )
}

export default PureComponent
