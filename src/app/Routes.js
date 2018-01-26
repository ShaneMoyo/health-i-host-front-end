import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Landing from '../components/landing/Landing';

export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Landing/>}/>;
    <Redirect to="/"/>
  </Switch>  
);