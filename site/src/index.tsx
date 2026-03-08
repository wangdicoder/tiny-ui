import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import './index.scss';
import '../../components/style/index.scss';

import { components } from './components/markdown-tag';
import { Header } from './components/header';
import { SidebarToggleProvider } from './context/sidebar-toggle-context';
import HomePage from './containers/home';
import GuidePage from './containers/guide';
import ComponentsPage from './containers/components';

const basename = (process.env.PUBLIC_PATH || '/').replace(/\/$/, '');

const App = (): React.ReactElement => (
  <BrowserRouter basename={basename} future={{ v7_startTransition: true }}>
    <SidebarToggleProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide/*" element={<GuidePage />} />
        <Route path="/components/*" element={<ComponentsPage />} />
      </Routes>
    </SidebarToggleProvider>
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root')!);
root.render(
  <MDXProvider components={components}>
    <App />
  </MDXProvider>
);
