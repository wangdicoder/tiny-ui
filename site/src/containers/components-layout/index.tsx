import React, { Suspense, useEffect } from 'react';
import './component-page.scss';
import { Layout, Divider } from '../../../../components';
import { COMPONENT_MENU, GUIDE_MENU } from '../../routers';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import SidebarMenu from '../../components/sidebar-menu';
import ComponentFooter from './footer';

const { Content } = Layout;

const ComponentLayout = (props: RouteComponentProps) => {
  useEffect(() => {
    const { state } = props.location;
    if (state && 'name' in state) {
      document.title = `${state['name']} | Tiny UI `;
    }
  });

  return (
    <Layout className="component-page">
      <SidebarMenu />
      <Layout className="component-page__layout">
        <Content>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {GUIDE_MENU.map(menu => (
                <Route key={menu.title} path={`/docs/${menu.route}`} component={menu.component} />
              ))}
              {COMPONENT_MENU.map(group =>
                group.children!.map(menu => (
                  <Route key={menu.title} path={`/docs/${menu.route}`} component={menu.component} />
                ))
              )}
            </Switch>
          </Suspense>

          <Divider className="component-page__divider" />
          <ComponentFooter
            routeName={'page' in props.match.params ? props.match.params['page'] : ''}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ComponentLayout;
