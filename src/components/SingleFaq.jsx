import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleFaq = ({ title, info }) => {
  const [showInfo, setShowInfo] = React.useState(false)
  return (
    <article className='my-4'>
      <header className='flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100'>
        <h4 className='leading-4 font-semibold'>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && (
        <div className='border border-b-2 p-5 font-light border-gray-200 text-left'>
          <p>{info}</p>
        </div>
      )}
    </article>
  )
}

export default SingleFaq
