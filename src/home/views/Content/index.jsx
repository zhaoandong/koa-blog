import React from 'react'
import ReactMarkdown from 'react-markdown'
import './index.scss'
import Header from '../../components/header/header.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'
import Content from '../../components/content/content.jsx'
import HomeTitle from '../../components/HomeTitle/index.jsx'
import { Spin } from 'antd'


class Home extends React.Component {
	constructor(props) {
		
		super(props);
		this.state = {
			data: ''
		};

	}	

	componentDidMount() {
	 
		let self = this;

		fetch("api/content").then(function(res) {
		
			if (res.ok) {
				res.json().then(function(data) {

					self.setState({
						data: data.content
					})
				});
			} else {

				console.log("Looks like the response wasn't perfect, got status", res.status);
			
			}
		
		}, function(e) {

				console.log("Fetch failed!", e);
		
		});
	}	

	loading() {

		return <Spin size="large" />

	}

  render() {

		let mainComopent = this.state.data ? 	<ReactMarkdown source={this.state.data} /> : <Spin size="large" /> ;

    return (
        <div className="ant-layout-aside">
	        <div className="ant-layout-main">
	        	<Header />
	          <div className="ant-layout-container">
	            <div className="ant-layout-content">

	            	{mainComopent}
	            	
	            </div>
	          </div>
	        </div>
        </div>
    );

    }
}

export default Home;