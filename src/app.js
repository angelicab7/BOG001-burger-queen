import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import NotFoundPage from './containers/NotFound';
import Waiter from './containers/Waiter';
import Chef from './containers/Chef';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Waiter" exact component={Waiter} />
        <Route path="/Chef" component={Chef} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default App;
