import React from 'react'
import { FeaturedProducts, Hero, Services, Faq, Container } from '../components'
const HomePage = () => {
  return (
    <Container>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Faq />
    </Container>
  )
}

export default HomePage
