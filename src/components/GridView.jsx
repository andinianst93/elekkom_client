import React from 'react'
import Product from './Product'
const GridView = ({ products }) => {
  return (
    <div>
      <div>
        <div className='grid gap-2 md:grid-cols-2'>
          {products.map((item, index) => {
            return <Product key={index} {...item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default GridView
