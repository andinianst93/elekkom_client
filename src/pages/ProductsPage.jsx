import React from 'react'
import { Container } from '../components'
import {
  Filters,
  ProductList,
  PageHero,
  Sort,
  PaginationBtn,
} from '../components'
const ProductsPage = () => {
  return (
    <Container>
      <PageHero />
      <div className='page'>
        <div className='products mx-auto'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
      <PaginationBtn />
    </Container>
  )
}

export default ProductsPage
