

const initialState = {

	count : 9

}

export default function onIncreaseClick (state = initialState, action){

    const count = state.count;

    switch (action.type) {

        case 'increase':
        
            return Object.assign({}, state ,{
            
            	count : count + 3
            
            })
        case 'test':
        
            return Object.assign({}, state ,{
            
            	count : count - 2
            
            })

        default:

            return state

    }


}