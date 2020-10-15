import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/users';
import Burger from './containers/burger';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to='/'>Users</Link>
                    <Link to='/burger'>Burger Queen</Link>
                </div>
                <div>
                    <Route path='/' exact component={Users} />
                    <Route path='/burger' component={Burger} />

                </div>
            </div>
        );
    }
}

export default App;