import React from 'react';
import './AppleItem.scss';

class AppleItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    render() {

        let { state, actions } = this.props;

        return (
            <div className="appleItem">
                <div className="apple"><img src="http://img5.imgtn.bdimg.com/it/u=3159104937,2998715874&fm=21&gp=0.jpg" alt=""/></div>
                <div className="info">
                    <div className="name">红苹果 - {state.id}号</div>
                    <div className="weight">{state.weight}克</div>
                </div>
                <div className="btn-div"><button>吃掉</button></div>
            </div>
        );

    }


}

export default AppleItem;