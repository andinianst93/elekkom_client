import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  HANDLE_PAGE,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    )
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    }
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true }
  }
  if (action.type === HANDLE_PAGE) {
    if (action.payload === 'inc') {
      let nextPage = state.page + 1
      if (nextPage > state.numOfPages) {
        nextPage = 1
      }
      return { ...state, page: nextPage }
    }
    if (action.payload === 'dec') {
      let prevPage = state.page - 1
      if (prevPage <= 0) {
        prevPage = state.numOfPages
      }
      return { ...state, page: prevPage }
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
