import { combineReducers } from 'redux'
import products, * as fromProducts from './products.jsx'
import onIncreaseClick from './init.jsx'
import cart, * as fromCart from './cart.jsx'

export default combineReducers ({
  products,
  onIncreaseClick,
  cart
})

function getProduct(state, id) {
  return fromProducts.getProduct(state.products, id)
}

function getAddedIds(state) {
  return [1,12]
}

export function getCartProducts(state) {




  return state.cart.addedIds.map(id => Object.assign({},
    state.products[id]
  ))
  // return state.map(id => Object.assign(
  //   state
  // ))
}