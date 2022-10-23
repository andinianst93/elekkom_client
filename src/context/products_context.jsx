import React, { useContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions'

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
}
const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const response = await axios.get(url)
      const products = response.data.products
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }

  useEffect(() => {
    fetchProducts(url)
  }, [])

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}