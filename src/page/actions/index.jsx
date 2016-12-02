import shop from '../api/index.jsx'
import * as types from '../constants/ActionTypes.jsx'

let actions = {

    //注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    pickApple: { type: 'increase' } 

};

export {actions as actions};

function productItem(products){

	return {

		type: types.GET_PRODUCTS,
		products

	}

} 

function addToCartUnsafe(productId){

	return {

		type: types.ADD_TO_CART,
		productId

	}

} 


export function getAll() {

	return dispatch => {

		shop.getProducts(product => {
			
			dispatch(productItem(product));
		
		});

	}

}

export function addToCart(productId) {

  return (dispatch, getState) => {

      dispatch(addToCartUnsafe(productId))

  }

}