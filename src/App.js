import React, { Component } from 'react';

// components
import Users from './containers/Users';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Users />
            </div>
        );
    }
}

export default App;
