import React from 'react'
import Star from './Star'
function StarRating({ totalStart = 5, selectedStars = 0, onRate = (f) => f }) {
  const createArray = (length) => [...Array(length)]
  console.log(createArray(totalStart))
  return (
    <>
      {createArray(totalStart).map((item, index) => {
        return (
          <Star
            key={index}
            selected={selectedStars > index}
            onSelect={() => onRate(index + 1)}
          />
        )
      })}
    </>
  )
}

export default StarRating
