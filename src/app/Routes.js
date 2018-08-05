import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Landing from '../components/landing/landing';
import Massage from '../components/massage/Massage';
import Minerals from '../components/minerals/Minerals';
import Movement from '../components/movement/Movement'
import Appointment from '../components/appointments/Appointment';
import MyAppointments from '../components/appointments/MyAppointments';
import Auth from '../components/auth/Auth';

export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Landing/>}/>;
    <Route path="/auth" render={() => <Auth/>}/>
    <Route exact path="/massage" render={() => <Massage/>}/>;
    <Route exact path="/minerals" render={() => <Minerals/>}/>;
    <Route exact path="/movement" render={() => <Movement/>}/>;
    <PrivateRoute exact path="/appointment/me" render={() => <MyAppointments/>}/>;
    <PrivateRoute exact path="/appointment" render={() => <Appointment/>}/>;
    <Redirect to="/"/>
  </Switch>  
);