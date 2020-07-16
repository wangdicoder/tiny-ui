import React, { Suspense } from 'react';
import { Route, RouteComponentProps, Switch, Redirect } from 'react-router-dom';
import { GUIDE_MENU } from '../../routers';
import { SidebarMenu } from '../../components/sidebar-menu';
import { Layout, Loader, Anchor } from '../../../../components';
// import { DocFooter } from '../../components/doc-footer';

const { Content, Sidebar } = Layout;
const { Link } = Anchor;

export default class GuidePage extends React.PureComponent<RouteComponentProps> {
  private getAnchors = (): void => {
    const mdNode = document.getElementsByClassName('markdown');
    console.log(mdNode);
  };

  componentDidMount(): void {
    this.getAnchors();
  }

  render(): React.ReactNode {
    const { url } = this.props.match;
    return (
      <Layout className="doc-container">
        <SidebarMenu routers={GUIDE_MENU} url={url} />
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
                {GUIDE_MENU.map((menu) => (
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
          <Sidebar width={140}>
            <Anchor offsetTop={90}>
              <Link href="#features" title="Features" />
              <Link href="#version" title="Version" />
            </Anchor>
          </Sidebar>
        </Layout>
      </Layout>
    );
  }
}
