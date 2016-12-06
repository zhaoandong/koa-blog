import React from 'react';
import {Navbar} from "react-bootstrap";
import './header.scss';

class Header extends React.Component {


    render() {
        return (
            <Navbar bsStyle='default'>
                <Navbar.Header>
                    <Navbar.Brand>
                        我的博客
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default Header;