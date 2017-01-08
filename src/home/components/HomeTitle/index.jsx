import React from 'react';
import './index.scss';
import { hashHistory } from 'react-router';

class HomeTitle extends React.Component {

    gotoContent(){

        hashHistory.push('/content')

    }

    render() {

        return (
            <div className="ant-home-title ant-card" onClick={this.gotoContent}>
                <h2>我是标题我是标题我是标题我是标题我是标题</h2>
                <p>我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述</p>
            </div>
        );
    }


}

export default HomeTitle;