import React from 'react';
import './sider-menu.scss';
import { COMPONENT_MENU, GUIDE_MENU } from '../../../menu';
import { NavLink } from 'react-router-dom';
import { Layout } from 'tiny-ui/src';
const { Sider } = Layout;

const SiderMenu = () => (
    <Sider theme="light" width={250} className="sider-menu">
        <h4 className="sider-menu__title">Guide</h4>
        <ul className="sider-menu__menu">
            {GUIDE_MENU.map((menu, idx) => (
                <li key={idx} className="sider-menu__menu-item">
                    <NavLink
                        to={`/components${menu.route}`}
                        activeClassName="sider-menu__menu-item_active">
                        {menu.title}
                    </NavLink>
                </li>
            ))}
        </ul>

        <h4 className="sider-menu__title">Components</h4>
        <ul className="sider-menu__menu">
            {COMPONENT_MENU.map((mainMenu, idx) => (
                <React.Fragment key={idx}>
                    <li className="sider-menu__group-title">{mainMenu.title}</li>
                    <ul className="sider-menu__group-list">
                        {mainMenu.children.map((menu, idx) => (
                            <li key={idx} className="sider-menu__menu-item">
                                <NavLink
                                    to={`/components${menu.route}`}
                                    activeClassName="sider-menu__menu-item_active">
                                    {menu.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </React.Fragment>
            ))}
        </ul>
    </Sider>
);

export default SiderMenu;
