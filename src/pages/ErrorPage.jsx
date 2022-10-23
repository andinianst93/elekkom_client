import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Container>
      {' '}
      <div className='min-h-[calc(100vh - (20vh + 10rem))] p-[5rem] m-auto'>
        <article>
          <div className='text-3xl capitalize font-bold mb-4 text-center'>
            <h2>404 Not Found</h2>
          </div>
          <div className='text-center'>
            <button
              type='button'
              className='text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
            >
              <Link to='/'>Back Home</Link>
            </button>
          </div>
        </article>
      </div>
    </Container>
  )
}

export default ErrorPage
