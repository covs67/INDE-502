
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Login from './login.js';
import Create from './create.js';
import Landing from './landing.js';
import Home from './Home.js';
import challengeyourself from './challengeyourself';

import Default from './default.js'
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Landing' component={Landing} />
            <Route path='/create' component={Create} /> 
            {/* <Route exact path='/home' component={Home} />
           <Route path='/startlearning' component={startlearning} />
           <Route path='/about' component={About} />
           */}
           {/* <Route path='/challengeyourself' component={challengeyourself} /> */}
           <Route component={Default} />
       </Switch>
   </Router>
    );
  }
}




export default App;
