import React from 'react';
import Header from './header';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/home';
import ComponentPage from '../pages/component';

class App extends React.PureComponent {
    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/home" component={HomePage}/>
                    <Route path="/components/:page" component={ComponentPage}/>
                    <Redirect from="/components" to="/components/get-started"/>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </>
        );
    }
}

export default App;
