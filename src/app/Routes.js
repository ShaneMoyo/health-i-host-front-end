import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

export default () => (
  <Switch> 
    <Route exact path="/" render={() => <App/>}/>;
    <Redirect to="/"/>
  </Switch>  
);