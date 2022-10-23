import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import AmountButtons from './AmountButtons'
const AddToCart = () => {
  const [amount, setAmount] = useState(1)
  const increase = () => {
    setAmount((oldAmount) => oldAmount + 1)
    return tempAmount
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }
  return (
    <div className='my-4'>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <p className='flex mx-4 items-left justify-left rounded-md border border-transparent bg-emerald-600 p-2 w-fit h-fit text-base font-medium text-white hover:bg-emerald-700'>
        Add to cart
      </p>
    </div>
  )
}

export default AddToCart
