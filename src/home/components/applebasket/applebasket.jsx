import React from 'react';
import './appleBasket.scss';
import { connect } from 'react-redux';
import {actions, addToCart} from '../../actions/index.jsx';

class AppleBasket extends React.Component {


    render() {

        let { value, onIncreaseClick, count2, products, addToCart } = this.props;

        return (
		      <div className="appleBusket">
		        <div className="title">购物车</div>
		        
		        <div className="stats">
		            <div className="section">
		                <div className="head">当前</div>
		                <div className="content1">                            
		                	{value}个苹果，克</div>
		            </div>
		            <div className="section">
		                <div className="head">已吃掉{count2}</div>
		                <div className="content1">
		                </div>
		            </div>            
		        </div>
		        <div className="appleList">
		        	{
		        		Object.keys(products).map(function(key){
		        			let item = products[key];
		        			return (
		        				<div key={item.id}>
		        					id: {item.id} &nbsp;&nbsp;
		        					title : {item.title} &nbsp;&nbsp;
		        					price : {item.price} &nbsp;&nbsp;
		        					store : {item.inventory}
		        					<button onClick={() => addToCart(item.id)} >add to cart</button>
		        				</div>)

		        		})
		        	}
		        </div>
		        
		        <div className="btn-div">
		            <button onClick={onIncreaseClick}>点击我</button>
		        </div>

		      </div>
        );
    }
}


function mapStateToProps(state) {
  return {
    value: state.onIncreaseClick.count,
    products : state.products
  }
}

const increaseAction = { type: 'increase' }

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(actions.pickApple),
    addToCart : (e) => dispatch(addToCart(e))
  }
}


export default connect(

  mapStateToProps,
  mapDispatchToProps

)(AppleBasket)
