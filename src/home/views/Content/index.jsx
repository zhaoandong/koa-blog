import React from 'react'
import ReactMarkdown from 'react-markdown'
import './index.scss'
import Header from '../../components/header/header.jsx'
import Sidebar from '../../components/Sidebar/index.jsx'
import Content from '../../components/content/content.jsx'
import HomeTitle from '../../components/HomeTitle/index.jsx'


var input = '# This is a header\n\nAnd this is a paragraph\n\n# This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph # This is a header\n\nAnd this is a paragraph  # This is a header\n\nAnd this is a paragraph';


class Home extends React.Component {

    render() {
        return (
            <div className="ant-layout-aside">
                <Sidebar />
				        <div className="ant-layout-main">
				        	<Header />
				          <div className="ant-layout-container">
				            <div className="ant-layout-content">
				            	<ReactMarkdown source={input} />
				            </div>
				          </div>
				        </div>
            </div>
        );
    }
}

export default Home;