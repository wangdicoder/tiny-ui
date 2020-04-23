import React, { Suspense } from 'react';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { GUIDE_MENU } from '../../routers';
import { SidebarMenu } from '../../components/sidebar-menu';
import { Layout } from '../../../../components';
// import { DocFooter } from '../../components/doc-footer';

const { Content } = Layout;

export default class GuidePage extends React.PureComponent<RouteComponentProps> {
  render(): React.ReactNode {
    const { url } = this.props.match;
    return (
      <Layout className="doc-container">
        <SidebarMenu routers={GUIDE_MENU} url={url} />
        <Layout className="doc-container__layout">
          <Content>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {GUIDE_MENU.map(menu => (
                  <Route
                    key={menu.title}
                    path={`${url}/${menu.route}`}
                    component={menu.component}
                  />
                ))}
                <Redirect from={`${url}`} to={`${url}/${GUIDE_MENU[0].route}`} />
              </Switch>
            </Suspense>
            {/*<Divider className="doc-container__divider" />*/}
            {/*<DocFooter routers={GUIDE_MENU} />*/}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
