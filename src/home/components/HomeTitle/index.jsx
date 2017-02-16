import React from 'react';
import './index.scss';
import { hashHistory } from 'react-router';

class HomeTitle extends React.Component {

     constructor(props) {

        super(props);

        this.state = {

            data: this.props.data

        }
     
     }

    gotoContent(){

        hashHistory.push('/content/1')

    }

    render() {

        return (
            <div className="ant-home-title ant-card" onClick={this.gotoContent}>
                <h2>{this.state.data["title"]}</h2>
                <p>{this.state.data["desc"]}</p>
            </div>
        );
    }


}

export default HomeTitle;