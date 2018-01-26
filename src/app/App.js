import React, { Component } from 'react';
import Navigation from '../components/navigation/Navigation';
import Routes from './Routes';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '../style/mystyle.css';
import './app.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
            <title>HealthiHost</title>
          </head>
          <Navigation/>
          <Routes/>
        </div>
      </Router>
    );
  }
}

export default connect(({ auth }) => ({
 
}),
null
)(App);
