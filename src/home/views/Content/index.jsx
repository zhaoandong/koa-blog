import React from 'react'
import ReactMarkdown from 'react-markdown'
import './index.scss'
import Header from '../../components/header/header.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'
import Content from '../../components/content/content.jsx'
import HomeTitle from '../../components/HomeTitle/index.jsx'
import { Spin } from 'antd'


//var input = '# This is a header\n\nAnd this is a paragraph\n\n# This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph  # This is a header\n\nAnd this is a paragraph';
let test ='# This is a header\n\nAnd this is a paragraph\n\n# This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph  # This is a header\n\nAnd this is a paragraph'

class Home extends React.Component {
	constructor(props) {
		
		super(props);
		this.state = {
			data: ""
		};

	}	

	componentDidMount() {
	 
		let self = this;

		fetch("api/content").then(function(res) {
		
			console.log(res)
			if (res.ok) {
				res.json().then(function(data) {
					console.log(data)
					self.setState({
						data: data
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
                <Sidebar />
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

    	// } 

    }
}

export default Home;