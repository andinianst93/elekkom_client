import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loading, Error, Stars, PageHero, AddToCart } from '../components'
import axios from 'axios'
import { Container } from '../components'
const SingleProductPage = () => {
  const { id } = useParams()
  const [product, setProducts] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        `https://elekkom-server.onrender.com/api/v1/products/${id}`
      )
      const data = response.data
      setIsLoading(false)
      setProducts(data.product)
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [id])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <Error />
  }
  return (
    <Container>
      <PageHero title={product.name} />
      <div className='grid gap-[4rem] mt-8 pb-8 md:grid-cols-2 items-center min-h-[calc(100vh - (20vh + 10rem))]'>
        <img src={product.image} alt={product.name} />
        <section>
          <h2 className='capitalize text-3xl font-semibold'>{product.name}</h2>
          <Stars rating={product.rating} />
          <h5 className='text-emerald-700 text-xl font-bold my-2'>
            ${product.price}
          </h5>
          <p className='leading-8 max-w-[45em]'>{product.description}</p>
          <p className='capitalize w-[200px] grid grid-cols-2 my-4 max-w-3xl xl:max-w-5xl'>
            <span className='font-bold'>SKU:</span>
            {product._id}
          </p>
          <p className='capitalize w-[200px] grid grid-cols-2 my-4'>
            <span className='font-bold'>Brand:</span>
            {product.company}
          </p>
          <hr />
          <AddToCart />
        </section>
      </div>
    </Container>
  )
}

export default SingleProductPage
