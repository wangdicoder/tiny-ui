import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { COMPONENT_MENU, RouterItem } from '../../routers';
import { SidebarMenu } from '../../components/sidebar-menu';
import { Layout, Loader, Divider } from '../../../../components';
import { DocFooter } from '../../components/doc-footer';
import ComponentOverview from './overview';

const { Content } = Layout;

const flattenRouters = (routers: RouterItem[]): RouterItem[] => {
  return routers.reduce((res: RouterItem[], router) => {
    router.children?.forEach((child) => {
      res.push(child);
    });
    return res;
  }, []);
};

const ComponentsPage = (): React.ReactElement => {
  const flattenedRouters = flattenRouters(COMPONENT_MENU);
  return (
    <Layout className="doc-container">
      <SidebarMenu routers={COMPONENT_MENU} url="/components" />
      <Layout className="doc-container__layout">
        <Content>
          <Suspense
            fallback={
              <div className="doc-container__fallback">
                <Loader />
                <div style={{ marginLeft: 8 }}>Loading...</div>
              </div>
            }>
            <Routes>
              <Route index element={<ComponentOverview />} />
              {flattenedRouters.map((menu) => {
                const Component = menu.component;
                return (
                  <Route
                    key={menu.title}
                    path={menu.route}
                    element={<Component />}
                  />
                );
              })}
            </Routes>
          </Suspense>
          <Divider className="doc-container__divider" />
          <DocFooter routers={flattenedRouters} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default ComponentsPage;
