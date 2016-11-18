import React from 'react';
import './appleBasket.scss';
import { connect } from 'react-redux';
import AppleItem from '../AppleItem/AppleItem.jsx';
import actions from '../../actions/appleActions.jsx';

class AppleBasket extends React.Component {


    render() {

        let { value, dispatch, onIncreaseClick } = this.props;
        
        //这部分从对应的 appleBasketReducer.js 中拷贝
        // let mockState = {
        //     isPicking : false,
        //     newAppleId: 3,
        //     apples: [
        //         {
        //             id: 1,
        //             weight: 235,
        //             isEaten: true
        //         },
        //         {
        //             id: 2,
        //             weight: 256,
        //             isEaten: false
        //         }
        //     ]
        // };

        // //是否开启模拟数据的开关，注释这行代码关闭模拟数据
        // state = mockState;
        
        
        // //对 state 做显示级别的转化
        // let stats = {
        //     appleNow: {
        //         quantity: 0,
        //         weight: 0
        //     },
        //     appleEaten: {
        //         quantity: 0,
        //         weight: 0
        //     }
        // };
        
        // state.apples.map(apple => {
        //     let selector = apple.isEaten ? 'appleEaten':'appleNow';
        //     stats[selector].quantity ++;
        //     stats[selector].weight += apple.weight;
        // })

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
		            <button onClick={onIncreaseClick}>摘苹果1</button>
		        </div>
		        
		      </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    value: state.count
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