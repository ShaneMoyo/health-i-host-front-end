import React, { Component } from 'react';
import Routes from './Routes';
import { connect } from 'react-redux';

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

          <Routes/>
        </div>
      </Router>
    );
  }
}

export default connect(({ auth }) => ({
  error: auth.error
}),
null
)(App);
