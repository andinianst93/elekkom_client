import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className='bg-transparent border-transparent cursor-pointer p-4 w-[2rem]'>
      <div className='grid w-[140px] justify-center grid-cols-3 items-center'>
        <button type='button' className='text-base' onClick={decrease}>
          <FaMinus />
        </button>
        <h2 className='text-4xl font-semibold'>{amount}</h2>
        <button type='button' className='text-base' onClick={increase}>
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default AmountButtons
