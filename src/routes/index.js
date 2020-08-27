import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ListHosts from '../pages/ListHosts';
import List from '../pages/List';
import Options from '../pages/Options';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Options} />
    <Route path="/list" exact component={List} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/listHosts" component={ListHosts} />
  </Switch>
);
export default Routes;
