import React from 'react';
import './appleBasket.scss';
import { connect } from 'react-redux';
import AppleItem from '../AppleItem/AppleItem.jsx';
import actions from '../../actions/appleActions.jsx';

class AppleBasket extends React.Component {


    render() {

        let { value, dispatch, onIncreaseClick, product } = this.props;

        return (
		      <div className="appleBusket">
		        <div className="title">苹果篮子</div>
		        
		        <div className="stats">
		            <div className="section">
		                <div className="head">当前</div>
		                <div className="content1">                            
		                	{value}个苹果，克</div>
		            </div>
		            <div className="section">
		                <div className="head">已吃掉</div>
		                <div className="content1">
		                </div>
		            </div>            
		        </div>
		        <div className="appleList">

		        </div>
		        
		        <div className="btn-div">
		            <button onClick={onIncreaseClick}>摘苹果</button>
		        </div>

		      </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    value: state.onIncreaseClick.count,
    product: state.product
  }
}

const increaseAction = { type: 'increase' }

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(actions.pickApple)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppleBasket)
//export default connect(select)(AppleBasket);

// export default AppleBasket;