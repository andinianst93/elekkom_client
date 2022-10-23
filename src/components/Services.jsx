import React from 'react'
import { services } from '../utils/constants'
const Services = () => {
  return (
    <div className='bg-white py-12'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-lg font-semibold text-emerald-600'>
            Nothing Can Weigh You Down
          </h2>
          <p className='mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
            Experience our best laptop.
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
            Work or create from anywhere with unlimited mobility, vibrant
            display, and everyday performance you have always wanted.
          </p>
        </div>

        <div className='mt-10'>
          <dl className='space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0'>
            {services.map((service) => (
              <div key={service.title} className='relative'>
                <dt>
                  <div className='absolute flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white'>
                    <div className='h-6 w-6 p-1' aria-hidden='true'>
                      {service.icon}
                    </div>
                  </div>
                  <p className='ml-16 text-lg font-medium leading-6 text-gray-900 capitalize'>
                    {service.title}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  {service.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Services
