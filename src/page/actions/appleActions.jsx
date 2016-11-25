import shop from '../api/index.jsx'

let actions = {

    //注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    pickApple: { type: 'increase' }

};

export default actions;

function productItem(product){

	return {

		type: 'test',
		product

	}

} 


export function getAll() {

	return dispatch => {

		shop.getProducts(product => {
		
			dispatch(productItem(product));
		
		});

	}

}
