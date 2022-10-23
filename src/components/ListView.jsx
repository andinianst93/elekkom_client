import React from 'react'
import Stars from './Stars'
import { Link } from 'react-router-dom'
const ListView = ({ products }) => {
  return (
    <section className='grid gap-y-[3rem] mt-4'>
      {products.map((item) => {
        const { _id: id, name, price, image, description, rating } = item
        return (
          <article
            key={id}
            className='shadow-lg p-4 rounded-lg md:grid md:grid-cols-2 md:gap-[2rem] md:items-center'
          >
            <img
              src={image}
              alt={name}
              className='w-[300px] h-[250px] block object-cover rounded-lg mb-4'
            />
            <div>
              <h3 className='capitalize mb-2 text-lg font-semibold'>{name}</h3>

              <Stars rating={rating} />
              <h5 className='text-teal-500 mb-3 font-semibold'>${price}</h5>
              <p className='max-w-[45em] mb-4'>
                {description.substring(0, 150)}...
              </p>
              <Link
                to={`/products/${id}`}
                className='capitalize w-fit text-gray-800 bg-teal-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2'
              >
                Details
              </Link>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default ListView
