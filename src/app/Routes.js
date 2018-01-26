import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Landing from '../components/landing/Landing';
import Massage from '../components/massage/Massage';

export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Landing/>}/>;
    <Route exact path="/Massage" render={() => <Massage/>}/>;
    <Redirect to="/"/>
  </Switch>  
);