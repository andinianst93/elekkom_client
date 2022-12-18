import React from 'react'
import { useProductsContext } from '../context/products_context'
const PaginationBtn = () => {
  const { page, handlePage } = useProductsContext()
  return (
    <div className='w-[90vw] max-w-3xl m-auto mb-[1.5rem] flex justify-center items-center'>
      <button
        className='capitalize text-base font-semibold m-[1rem] px-[0.5rem] py-[0.25rem] border-transparent bg-emerald-700 rounded-md text-white cursor-pointer'
        onClick={() => handlePage('dec')}
      >
        prev
      </button>
      <p className='mb-0 text-base font-bold'>{page}</p>
      <button
        className='capitalize text-base font-semibold m-[1rem] px-[0.5rem] py-[0.25rem] border-transparent bg-emerald-700 rounded-md text-white cursor-pointer'
        onClick={() => handlePage('inc')}
      >
        next
      </button>
    </div>
  )
}

export default PaginationBtn
