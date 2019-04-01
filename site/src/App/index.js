import React from 'react';
import Header from './header';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/home';
import ComponentPage from '../pages/component';
import TestPage from '../pages/test';

class App extends React.PureComponent {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={HomePage}/>
                    {process.env.NODE_ENV === 'development' && <Route exact path="/test" component={TestPage}/>}
                    <Route path="/components/:page" component={ComponentPage}/>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </Router>
        );
    }
}

export default App;
