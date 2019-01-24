import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Link from '../imports/ui/Link'
import Login from '../imports/ui/Login'
import NotFound from '../imports/ui/NotFound'
import Signup from '../imports/ui/Signup'


const routes = (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/links" component={Link}/>
        <Route path="*" component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});