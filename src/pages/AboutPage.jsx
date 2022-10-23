import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
const AboutPage = () => {
  return (
    <Container>
      {' '}
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
              About
            </Link>
          </div>
        </li>
      </ol>
      <div className='min-h-[calc(100vh - (20vh + 10rem))] p-[5rem] m-auto'>
        <article>
          <div className='text-3xl capitalize font-bold mb-4'>
            <h2>our story</h2>
          </div>
          <p className='mb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at
            molestias numquam? Officiis dolorem ipsam consectetur quia veniam!
            Beatae, maxime maiores? Quos, necessitatibus laborum sapiente at ad
            aperiam aut asperiores.
          </p>
          <p className='mb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at
            molestias numquam? Officiis dolorem ipsam consectetur quia veniam!
            Beatae, maxime maiores? Quos, necessitatibus laborum sapiente at ad
            aperiam aut asperiores.
          </p>
          <p className='mb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at
            molestias numquam? Officiis dolorem ipsam consectetur quia veniam!
            Beatae, maxime maiores? Quos, necessitatibus laborum sapiente at ad
            aperiam aut asperiores.
          </p>
        </article>
      </div>
    </Container>
  )
}

export default AboutPage
