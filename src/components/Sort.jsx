import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()
  return (
    <div className='sort'>
      <div>
        <button type='button'>
          <BsFillGridFill
            className={`${
              grid_view ? 'bg-teal-600 text-white' : 'text-teal-600'
            }`}
            onClick={setGridView}
          />
        </button>
        <button type='button'>
          <BsList
            className={`${
              !grid_view ? 'bg-teal-600 text-white' : 'text-teal-600'
            }`}
            onClick={setListView}
          />
        </button>
      </div>
      <p className='text-sm text-gray-500'>{products.length} products found</p>
      <hr />
      <form className='text-sm text-gray-500'>
        <label htmlFor='sort' className='inline-block mr-2'>
          Sort by
        </label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className='border-transparent text-sm capitalize px-[0.25rem] py-[0.5rem]'
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (A-Z)</option>
          <option value='name-z'>name (Z-A)</option>
        </select>
      </form>
    </div>
  )
}

export default Sort
