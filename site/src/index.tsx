import React, { lazy, Suspense } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import './index.scss';
import '../../components/style/index.scss';

import { components } from './components/markdown-tag';
import { Header } from './components/header';
import HomePage from './containers/home';
import GuidePage from './containers/guide';
import ComponentsPage from './containers/components';

const App = (): React.ReactElement => (
  <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/guide" component={GuidePage} />
        <Route path="/components" component={ComponentsPage} />
        {process.env.NODE_ENV?.trim() === 'development' && (
          <Suspense fallback="none">
            <Route path="/test" component={lazy(() => import('./containers/test'))} />
          </Suspense>
        )}
      </Switch>
    </>
  </BrowserRouter>
);

ReactDom.render(
  <MDXProvider components={components}>
    <App />
  </MDXProvider>,
  document.getElementById('root')
);
