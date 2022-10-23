import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
const Product = ({ name, price, _id: id, image }) => {
  return (
    <Container>
      <div className='shadow-lg bg-white rounded-2xl m-4 pb-2 md:w-[320px] w-full'>
        <Link to={`/products/${id}`}>
          <img src={image} alt={name} className='w-fit h-[280px] p-4' />
          <footer className='mt-4 mb-0 mx-4 capitalize flex flex-col items-center'>
            <h5>{name}</h5>
            <p className='font-semibold text-emerald-600'>${price}</p>
          </footer>
        </Link>
      </div>
    </Container>
  )
}

export default Product
