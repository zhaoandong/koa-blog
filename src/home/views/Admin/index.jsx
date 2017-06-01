import React from 'react'
import './index.scss'
import Header from '../../components/header/header.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'
import Content from '../../components/content/content.jsx'
import HomeTitle from '../../components/HomeTitle/index.jsx'
import ReactMarkdown from 'react-markdown'
import { Input, Row, Col } from 'antd'


class Home extends React.Component {
	 constructor(props) {

		super(props);
	 
		this.state = {
		  data: []
		};
	 
	 }

	 componentDidMount() {
	 
	}
	render() {

		return (
			<div className="ant-layout-aside">
				 <Sidebar />
					  <div className="ant-layout-main">
						<Header />
						 <div className="ant-layout-container">
							<div className="ant-layout-content">
								<Row gutter={48}>
								  <Col span={6} />
								  <Col span={6} />
								  <Col span={6} />
								  <Col span={6} />
								</Row>
								<Input type="textarea" placeholder="Autosize height based on content lines"  />	
							</div>
						 </div>
					  </div>
			</div>
		);
	 }
}

export default Home;