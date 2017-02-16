import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home/views/Home/index.jsx'
import Content from './home/views/Content/index.jsx'
import { Router, Route, hashHistory ,browserHistory} from 'react-router'
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Home} />
		<Route path="/content/:id" component={Content}/>
	</Router>,
    document.getElementById('container')
);


