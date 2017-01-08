import React from 'react'
import './index.scss'
import Header from '../../components/header/header.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'
import Content from '../../components/content/content.jsx'
import HomeTitle from '../../components/HomeTitle/index.jsx'



class Home extends React.Component {

    render() {
        return (
            <div className="ant-layout-aside">
                <Sidebar />
				        <div className="ant-layout-main">
				        	<Header />
				          <div className="ant-layout-container">
				            <div className="ant-layout-content">
				            	我是正文
				            </div>
				          </div>
				        </div>
            </div>
        );
    }
}

export default Home;