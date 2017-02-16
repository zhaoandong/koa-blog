import React from 'react'
import './index.scss'
import Header from '../../components/header/header.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'
import Content from '../../components/content/content.jsx'
import HomeTitle from '../../components/HomeTitle/index.jsx'


class Home extends React.Component {
	 constructor(props) {

		super(props);
	 
		this.state = {
		  data: []
		};
	 
	 }

	 componentDidMount() {
	 
		let self = this;

		fetch("api/allTitles").then(function(res) {
		
			if (res.ok) {
				res.json().then(function(data) {
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
	render() {

		return (
			<div className="ant-layout-aside">
				 <Sidebar />
					  <div className="ant-layout-main">
						<Header />
						 <div className="ant-layout-container">
							<div className="ant-layout-content">
								{
									this.state.data.map(function(item,index){

										return <HomeTitle data={item} key={index} />

									})
								}			
							</div>
						 </div>
					  </div>
			</div>
		);
	 }
}

export default Home;