import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// components
import Header from './components/Header';

// pages
import Users from './pages/Users';
import UsersHooks from './pages/UsersHooks';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Users} />
                        <Route exact path="/users-hook" component={UsersHooks} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
