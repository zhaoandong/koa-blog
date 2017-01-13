import React from 'react'
import './index.scss'
import Header from '../../components/header/header.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'
import Content from '../../components/content/content.jsx'
import HomeTitle from '../../components/HomeTitle/index.jsx'
import { Row, Col , Input, Button} from 'antd'



class Home extends React.Component {
              constructor(props) {
   	 	super(props);
    	this.state = {inputText: ''};
  }
           handleChange(event){
             this.setState({inputText:event.target.value});
           }
		add(){
			console.log(this.state.inputText.toString())
		}
    render() {
        return (
            <div className="ant-layout-aside">
                <Sidebar />
				        <div className="ant-layout-main">
				        	<Header />
				          <div className="ant-layout-container">
				            <div className="ant-layout-content">
								    <Row type="flex" justify="start">
								      <Col span={12}>
								      	<textarea className='ant-input antc-textarea' onChange = {this.handleChange.bind(this)} />
								      	<Button type="primary" onClick={this.add.bind(this)} >上传</Button>
								      </Col>
								      <Col span={12}>col-12</Col>
								    </Row>
				            </div>
				          </div>
				        </div>
            </div>
        );
    }
}

export default Home;