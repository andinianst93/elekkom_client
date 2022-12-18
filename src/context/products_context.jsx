import React, { useContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import reducer from '../reducers/products_reducer'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  HANDLE_PAGE,
} from '../actions'
import { products_url as url } from '../utils/constants'
const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  numOfPages: 3,
  page: 1,
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

  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }
  useEffect(() => {
    fetchProducts(`${url}${state.page}`)
  }, [state.page])

  return (
    <ProductsContext.Provider value={{ ...state, handlePage }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
