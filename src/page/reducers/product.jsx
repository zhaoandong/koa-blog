import { combineReducers } from 'redux'

const initialState = {

  product: []

}

export default function product(state = initialState, action){
   
		console.log(state);

    switch (action.type) {     
		  case 'test':

		  		console.log(state);
		      return Object.assign({}, state ,{
		      

		      
		      })
		  default:

		      return state
		}


}