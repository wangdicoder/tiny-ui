import React from 'react';
import Header from './header';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/home';
import ComponentPage from '../pages/component';
import GuidePage from '../pages/guide';
import TestPage from '../pages/test';

class App extends React.PureComponent {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/:page" component={GuidePage}/>
                    <Route path="/components/:page" component={ComponentPage}/>
                    {process.env.NODE_ENV === 'development' && <Route path="/test" component={TestPage}/>}
                    <Redirect from="/" to="/home"/>
                </Switch>
            </Router>
        );
    }
}

export default App;
