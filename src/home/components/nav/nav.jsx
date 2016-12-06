import React from 'react';
import {Nav,NavItem} from "react-bootstrap";
import './nav.scss';


class LeftNav extends React.Component {


    render() {
        return (
				  <Nav bsStyle="pills" stacked  pullLeft activeKey={1} className='nav-width'>
				    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
				    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
				    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
				  </Nav>
        );
    }
}

export default LeftNav;