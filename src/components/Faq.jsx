import React from 'react'
import { questions } from '../utils/constants'
import SingleFaq from './SingleFaq'
const Faq = () => {
  const [faq, setFaq] = React.useState(questions)

  return (
    <main className='py-12'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
        <h3 className='leading-8 text-3xl  text-emerald-700 font-bold pb-4'>
          Frequenty Asked Questions (FAQ)
        </h3>
        <section>
          {faq.map((question, index) => {
            return <SingleFaq key={question.id} index={index} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default Faq
