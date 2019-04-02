import React, { Suspense } from 'react';
import './component-page.scss';
import { Layout, Divider } from 'tiny-ui/src';
import { COMPONENT_MENU, GUIDE_MENU } from '../../menu';
import { Switch, Route } from 'react-router-dom';
import SiderMenu from '../shared/sider-menu';
import ComponentFooter from './footer';

const { Content } = Layout;

export default (props) => {
    return (
        <Layout className="component-page">
            <SiderMenu/>
            <Layout className="component-page__layout">
                <Content>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            {GUIDE_MENU.map((menu) => (
                                <Route key={menu.title} path={`/components/${menu.route}`} component={menu.component}/>
                            ))}
                            {COMPONENT_MENU.map((group) => (
                                group.children.map((menu) => (
                                    <Route
                                        key={menu.title}
                                        path={`/components/${menu.route}`}
                                        component={menu.component}
                                    />
                                ))
                            ))}
                        </Switch>
                    </Suspense>

                    <Divider className="component-page__divider"/>
                    <ComponentFooter routeName={props.match.params.page}/>
                </Content>
            </Layout>
        </Layout>
    );
};
