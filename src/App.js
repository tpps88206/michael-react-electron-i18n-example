import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history'
import Root from './containers';

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Root} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
