import React, { Suspense } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { COMPONENT_MENU, RouterItem } from '../../routers';
import { SidebarMenu } from '../../components/sidebar-menu';
import { Layout, Loader } from '../../../../components';
// import { DocFooter } from '../../components/doc-footer';
import ComponentOverview from './overview';

const { Content } = Layout;

const flattenRouters = (routers: RouterItem[]): RouterItem[] => {
  return routers.reduce((res: RouterItem[], router) => {
    router.children!.forEach((child) => {
      res.push(child);
    });
    return res;
  }, []);
};

export default class ComponentsPage extends React.PureComponent<RouteComponentProps> {
  render(): React.ReactNode {
    const { url } = this.props.match;
    const flattenedRouters = flattenRouters(COMPONENT_MENU);
    return (
      <Layout className="doc-container">
        <SidebarMenu routers={COMPONENT_MENU} url={url} />
        <Layout className="doc-container__layout">
          <Content>
            <Suspense
              fallback={
                <div className="doc-container__fallback">
                  <Loader />
                  <div style={{ marginLeft: 8 }}>Loading...</div>
                </div>
              }>
              <Switch>
                <Route exact path={`${url}`} component={ComponentOverview} />
                {flattenedRouters.map((menu) => (
                  <Route
                    key={menu.title}
                    path={`${url}/${menu.route}`}
                    component={menu.component}
                  />
                ))}
              </Switch>
            </Suspense>
            {/*<Divider className="doc-container__divider" />*/}
            {/*<DocFooter routers={flattenedRouters} />*/}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
