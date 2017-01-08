import React from 'react';
import './index.scss';
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

class Sidebar extends React.Component {


    render() {
        return (
			<aside className="ant-layout-sider">
				<div className="ant-layout-logo"></div>
				<Menu
				  mode="inline" theme="dark" 
				>
					<SubMenu title="子菜单">
						<Menu.Item>子菜单项</Menu.Item>
						<Menu.Item>子菜单项</Menu.Item>
						<Menu.Item>子菜单项</Menu.Item>
						<Menu.Item>子菜单项</Menu.Item>
					</SubMenu>
				</Menu>
			</aside>
        );
    }
}

export default Sidebar;