import React from 'react';
import './header.scss';
import { Row, Col, Icon, Menu, Dropdown } from 'antd'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {


    render() {
        return (
            <div className='ant-layout-header'>
                <Menu className="header-menu" 
                mode="horizontal">
                    <SubMenu>
                        <Menu.Item key="setting:1">选项1</Menu.Item>
                        <Menu.Item key="setting:2">选项2</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="setting:3">注销</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="mail">
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Header;