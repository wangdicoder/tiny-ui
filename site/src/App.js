import React from 'react';
import Header from "./components/header";
import {HashRouter as Router, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/home';
import ComponentPage from './pages/component';
import TestPage from './pages/test';

class App extends React.PureComponent {
  render() {
    return (
        <Router>
            <Header />
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/component" component={ComponentPage}/>
            <Route path="/test" component={TestPage}/>
            {/*<Redirect from="/" to="/home"/>*/}
        </Router>
    );
  }
}

export default App;
