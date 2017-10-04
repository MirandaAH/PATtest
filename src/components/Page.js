import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Landing';

import Signup from './Signup';
import TodoMain from './TodoMain';
import NoMatch from './NoMatch';
import Logout from './Logout';

const Page = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/logout' component={Logout} />
    <Route exact path='/todomain' component={TodoMain} />
    <Route component={NoMatch} />
  </Switch>
);

export default Page;
