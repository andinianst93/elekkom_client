import React from 'react'
import Container from './Container'
const Footer = () => {
  return (
    <Container>
      <footer className='bg-emerald-900 h-[4rem]'>
        <div className='text-sm text-gray-100 text-center pt-4'>
          &copy; {new Date().getFullYear()} Andini Anissa. All rights reserved.
        </div>
        <div>
          <p className='text-sm text-gray-100 text-center'>Built with React</p>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
