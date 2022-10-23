import React from 'react'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <>
      <div className='py-4 my-8'>
        <div className='text-center'>
          <h2 className='capitalize text-3xl text-emerald-700 font-bold'>
            Featured Products
          </h2>
          <p className='mb-0 text-xl text-gray-500'>
            The best laptop picks across all categories, tested and reviewed by
            our experts.
          </p>
        </div>
        <div className='grid gap-[2.5rem] md:grid-cols-3 py-2'>
          {featured.slice(0, 3).map((item, index) => {
            return <Product key={index} {...item} />
          })}
        </div>
        <div className='my-5 md:mt-8 md:flex md:justify-center'>
          <div className='rounded-md'>
            <Link
              to='/products'
              className='flex w-fit mx-auto items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 md:py-4 md:px-10 md:text-lg'
            >
              All Products
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProducts
