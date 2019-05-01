
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Login from './login.js';
import Create from './create.js';
import Landing from './landing.js';
import Home from './Home.js'

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Landing' component={Landing} />
            <Route exact path='/Home' component={Home} />
            <Route path='/create' component={Create} />
       </Switch>
   </Router>
    );
  }
}




export default App;
