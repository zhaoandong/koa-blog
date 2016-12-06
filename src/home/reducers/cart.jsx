import * as types from '../constants/ActionTypes.jsx'
import { combineReducers } from 'redux'

const initialState = {

	quantityById: {},
	addedIds: []

}

function quantityById(state = initialState.quantityById, action){

  switch (action.type) {
    case types.ADD_TO_CART:
      const { productId } = action
      return Object.assign({}, state, {
        [productId]: (state[productId] || 0) + 1
      })
    default:
      return state
  }

}

function addedIds(state = initialState.addedIds, action){

    const count = state.count;

    switch (action.type) {

        case types.ADD_TO_CART:
          
          if (state.indexOf(action.productId) !== -1) {
		        return state
		      }
		      
					return [ ...state, action.productId ]

        default:

            return state

    }

}

export default combineReducers({
  quantityById,
  addedIds
})