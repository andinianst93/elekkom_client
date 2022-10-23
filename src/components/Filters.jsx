import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { FaCheck } from 'react-icons/fa'
import { getUniqueValues } from '../utils/helpers'
const Filters = () => {
  const {
    filters: { text, company, min_price, max_price, price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()
  const companies = getUniqueValues(all_products, 'company')

  return (
    <div className='mb-4'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type='text'
            name='text'
            placeholder='Search'
            className='p-[0.25rem] bg-gray-100 text-sm'
            value={text}
            onChange={updateFilters}
          ></input>
        </div>
      </form>
      <div className='my-4'>
        <h5 className='capitalize text-sm font-bold'>company</h5>
        <select
          name='company'
          value={company}
          onChange={updateFilters}
          className='bg-gray-200 capitalize text-sm rounded-md border-transparent p-[0.25rem]'
        >
          {companies.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
      <div className='my-4'>
        <h5 className='capitalize text-sm font-bold'>price</h5>
        <p className='my-[0.25rem] text-sm'>${price}</p>
        <input
          type='range'
          name='price'
          min={min_price}
          max={max_price}
          onChange={updateFilters}
          value={price}
        />
      </div>
      <button
        type='button'
        onClick={clearFilters}
        className='text-white capitalize bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2'
      >
        clear filters
      </button>
    </div>
  )
}

export default Filters
