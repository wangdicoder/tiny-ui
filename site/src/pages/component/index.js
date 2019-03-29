import React from 'react';
import './component-page.scss';
import { Layout } from 'core/src';
import { COMPONENT_MENU, GUIDE_MENU } from './menu';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;

const ComponentPage = (props) => {

    console.log(props);

    return (
        <Layout className="component-page">
            <Sider theme="light" width={250} className="component-page__sider">
                <h4 className="component-page__title">Guide</h4>
                <ul className="component-page__menu">
                    {GUIDE_MENU.map((menu, idx) => (
                        <li key={idx} className="component-page__menu-item">
                            <NavLink
                                to={`/components${menu.route}`}
                                activeClassName="component-page__menu-item_active">
                                {menu.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <h4 className="component-page__title">Components</h4>
                <ul className="component-page__menu">
                    {COMPONENT_MENU.map((mainMenu, idx) => (
                        <React.Fragment key={idx}>
                            <li className="component-page__group-title">{mainMenu.title}</li>
                            <ul className="component-page__group-list">
                                {mainMenu.children.map((menu, idx) => (
                                    <li key={idx} className="component-page__menu-item">
                                        <NavLink
                                            to={`/components${menu.route}`}
                                            activeClassName="component-page__menu-item_active">
                                            {menu.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ))}
                </ul>
            </Sider>
            <Layout>
            </Layout>
        </Layout>
    );
};

export default ComponentPage;
