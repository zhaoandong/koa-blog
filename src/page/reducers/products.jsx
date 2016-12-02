import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes.jsx'

const initialState = {

  byIds : {}

}

function products(state, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return Object.assign({}, state, {
        inventory: state.inventory - 1
     })
    default:
      return state
  }
}


export default function (state = {}, action){


    switch (action.type) {     

        case types.GET_PRODUCTS:

            return Object.assign({},
            
              state,
              action.products.reduce((obj, product) => {
                obj[product.id] = product
                return obj
              }, {})
            
            )

        case types.ADD_TO_CART:

          const productId = action.productId;
        
          return Object.assign({}, state, {

            [productId]: products(state[productId], action)

            }

          )

		  default:

		      return state
		}


}