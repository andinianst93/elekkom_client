import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ rating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index} className='text-yellow-400 mr-1'>
        {rating >= index + 1 ? (
          <BsStarFill />
        ) : rating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return <div className='flex my-2'>{tempStars}</div>
}

export default Stars
