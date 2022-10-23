import React from 'react'
import { Link } from 'react-router-dom'

const PageHero = ({ title }) => {
  return (
    <nav className='py-4'>
      <ol className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <li>
          <div className='flex items-center'>
            <Link to='/' className='mr-2 text-sm font-medium text-gray-900'>
              Home
            </Link>
            <svg
              width={16}
              height={20}
              viewBox='0 0 16 20'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              className='h-5 w-4 text-gray-300'
            >
              <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
            </svg>
          </div>
        </li>

        <li>
          <div className='flex items-center'>
            <Link
              to='/products'
              className='mr-2 text-sm font-medium text-gray-900'
            >
              Products
            </Link>

            <svg
              width={16}
              height={20}
              viewBox='0 0 16 20'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
              className='h-5 w-4 text-gray-300'
            >
              <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
            </svg>
          </div>
        </li>
        <li>
          <div className='flex items-center'>
            <p className='mr-2 text-sm font-medium text-gray-900 capitalize'>
              {title}
            </p>
          </div>
        </li>
      </ol>
    </nav>
  )
}

export default PageHero
