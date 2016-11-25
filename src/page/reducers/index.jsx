import { combineReducers } from 'redux'
import product from './product.jsx'
import onIncreaseClick from './init.jsx'

export default combineReducers ({
  product,
  onIncreaseClick
})








// const initialState = {

//   count: 9,
//   product: []

// }

// export default function onIncreaseClick (state = initialState, action){

//     const count = state.count;

//     switch (action.type) {

//         case 'increase':
        
//             return Object.assign({}, state ,{
            
//             	count : count + 3
            
//             })

//         case 'test':

//             return Object.assign({}, state ,{
            
//             	count : count - 3
            
//             })
//         default:

//             return state

//     }


// }