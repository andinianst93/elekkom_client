import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import { links } from '../utils/constants'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <Container>
      <div className='h-[5rem] z-10 shadow-sm flex items-center justify-between'>
        <div className='w-[90vw] max-w-[950px] my-auto mx-auto md:grid md:grid-cols-3'>
          <div className='flex items-center justify-between'>
            <Link to='/'>
              <h2 className='text-3xl tracking-wide font-bold'>
                Elek<span className='text-emerald-600'>Kom</span>
              </h2>
            </Link>
            <div
              onClick={toggleLinks}
              className='bg-transparent border-transparent cursor-pointer text-xl md:hidden'
            >
              {showLinks ? <SlArrowUp /> : <SlArrowDown />}
            </div>
          </div>
          <ul className='md:flex md:justify-center md:items-center hidden'>
            {links.map((link, index) => {
              return (
                <li
                  key={link.id}
                  className='font-normal cursor-pointer text-[16px] capitalize mr-8 hover:text-emerald-600'
                >
                  <Link to={link.url}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
          <div className='hidden md:flex md:justify-end md:bg-transparent md:border-transparent md:text-emerald-900 md:text-xl'>
            <Link to='/checkout' className='flex items-center'>
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>
      {showLinks && (
        <aside className='bg-white h-36 m-auto md:hidden'>
          <div>
            <ul className='bg-white w-full px-8 py-4'>
              {links.map((link) => {
                const { id, text, url } = link
                return (
                  <li
                    key={id}
                    onClick={toggleLinks}
                    className='text-[18px] w-full capitalize py-2 hover:text-emerald-600'
                  >
                    <Link to={url}>{text}</Link>
                  </li>
                )
              })}
            </ul>
            <div className='flex justify-center bg-transparent border-transparent text-emerald-900 text-xl'>
              <Link to='/checkout' className='flex items-center'>
                <span className='mr-2 text-lg'>Cart</span> <FaShoppingCart />
              </Link>
            </div>
          </div>
        </aside>
      )}
    </Container>
  )
}

export default Navbar
