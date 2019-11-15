import React from 'react';
import './sidebar-menu.scss';
import { COMPONENT_MENU, GUIDE_MENU } from '../../routers';
import { NavLink } from 'react-router-dom';
import { Layout } from '../../../../components';

const { Sidebar } = Layout;

const SidebarMenu = (): React.ReactElement => {
  let totalComponents = 0;
  COMPONENT_MENU.forEach(item => {
    if (item.children) {
      totalComponents += item.children.length;
    }
  });
  return (
    <Sidebar theme="light" width={250} className="sidebar-menu">
      <h4 className="sidebar-menu__title">Guide</h4>
      <ul className="sidebar-menu__menu">
        {GUIDE_MENU.map((menu, idx) => (
          <li key={idx} className="sidebar-menu__menu-item">
            <NavLink
              to={{
                pathname: `/components/${menu.route}`,
                state: { name: menu.title },
              }}
              activeClassName="sidebar-menu__menu-item_active">
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <h4 className="sidebar-menu__title">
        Components <span className="sidebar-menu__count-label">({totalComponents})</span>
      </h4>
      <ul className="sidebar-menu__menu">
        {COMPONENT_MENU.map((mainMenu, idx) => (
          <React.Fragment key={idx}>
            <li className="sidebar-menu__group-title">{mainMenu.title}</li>
            <ul className="sidebar-menu__group-list">
              {mainMenu.children!.map((menu, idx) => (
                <li key={idx} className="sidebar-menu__menu-item">
                  <NavLink
                    to={{
                      pathname: `/components/${menu.route}`,
                      state: { name: menu.title },
                    }}
                    activeClassName="sidebar-menu__menu-item_active">
                    {menu.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </ul>
    </Sidebar>
  );
};

export default SidebarMenu;
