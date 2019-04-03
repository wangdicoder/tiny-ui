import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './lib/index.scss';
import 'tiny-ui/themes/index.scss';
import App from './App';
import { HashRouter, Switch, Route } from 'react-router-dom';
import TestPage from './pages/test';

ReactDOM.render(
    <HashRouter>
        <Switch>
            {process.env.NODE_ENV === 'development' && <Route exact path="/test" component={TestPage}/>}
            <App/>
        </Switch>
    </HashRouter>,
    document.getElementById('root'));
