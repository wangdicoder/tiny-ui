import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GUIDE_MENU } from '../../routers';
import { SidebarMenu } from '../../components/sidebar-menu';
import { Layout, Loader, Divider } from '../../../../components';
import { DocFooter } from '../../components/doc-footer';

const { Content } = Layout;

const GuidePage = (): React.ReactElement => {
  return (
    <Layout className="doc-container">
      <SidebarMenu routers={GUIDE_MENU} url="/guide" />
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
              {GUIDE_MENU.map((menu) => {
                const Component = menu.component;
                return (
                  <Route
                    key={menu.title}
                    path={menu.route}
                    element={<Component />}
                  />
                );
              })}
              <Route path="" element={<Navigate to={GUIDE_MENU[0].route!} replace />} />
            </Routes>
          </Suspense>
          <Divider className="doc-container__divider" />
          <DocFooter routers={GUIDE_MENU} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default GuidePage;
