import React from 'react';
import { Layout } from 'tiny-ui/src';
import { COMPONENT_MENU } from '../shared/sider-menu/menu';
import { Switch, Route } from 'react-router-dom';
import SiderMenu from '../shared/sider-menu';

const ComponentPage = (props) => {

    return (
        <Layout className="component-page">
            <SiderMenu />
            <Layout>
                <Switch>
                    {COMPONENT_MENU.map((menu) => (
                        <Route key={menu.title} path={`/components${menu.route}`} component={menu.component}/>
                    ))}
                </Switch>
            </Layout>
        </Layout>
    );
};

export default ComponentPage;
