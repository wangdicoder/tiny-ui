import React, {Suspense} from 'react';
import Header from './header';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/home';
import ComponentPage from '../pages/component';
import GuidePage from '../pages/guide';
import TestPage from '../pages/test';

class App extends React.PureComponent {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/home" component={HomePage}/>
                        {process.env.NODE_ENV === 'development' && <Route exact path="/test" component={TestPage}/>}
                        <Route path="/components/:page" component={ComponentPage}/>
                        <Route path="/:page" component={GuidePage}/>
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </Router>
            </Suspense>
        );
    }
}

export default App;
