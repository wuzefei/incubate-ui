import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Popover } from 'antd';
import styles from './Header.less';
import Menus from './Menu';

const SubMenu = Menu.SubMenu;

const Header = ({ user, logout,switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu }) => {
  let handleClickMenu = e => e.key === 'logout' && logout()
  const menusProps = {
    menu,
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys,
  }
  return (
    <div className={styles.header}>
      <Menu
        mode="horizontal"
        style={{marginLeft: 40, display: 'inline-block', float: 'left'}}
        selectedKeys={['monitor']}
      >
        <Menu.Item key="app">
          <Icon type="appstore-o" />菜单一
        </Menu.Item>
        <Menu.Item key="publish">
          <Icon type="rocket" />菜单二
        </Menu.Item>
        <Menu.Item key="monitor">
          <Icon type="line-chart" />菜单三
        </Menu.Item>
        <Menu.Item key="database">
          <Icon type="hdd" />菜单四
        </Menu.Item>
        <Menu.Item key="message">
          <Icon type="customer-service" />菜单五
        </Menu.Item>
        <Menu.Item key="setting">
          <Icon type="setting" />菜单六
        </Menu.Item>
      </Menu>  
      <div className={styles.rightWarpper}>
        <div className={styles.button}>
          <Icon type="mail" />
        </div>
        <Menu mode="horizontal"  onClick={handleClickMenu}>
          <SubMenu style={{
            float: 'right',
          }} title={< span > <Icon type="user" />
          {user.username}< /span>}
          >
          <Menu.Item key="logout">
              <a>注销</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
        {isNavbar
        ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
        </Popover>
        : <div className={styles.button} onClick={switchSider}>
          <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
        </div>}
      </div>

    </div>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Header;
