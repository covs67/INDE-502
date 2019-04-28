import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import {AppBar} from '@material-ui/core/';

class Login extends Component {

render() {

return(
  <div>
  <AppBar position="static" color="default">
        <div style={{height:'50%',width:'50%',marginTop:'5px'}}>
       <h1>Login</h1>
       </div>
  </AppBar>
   </div>

);

}
}


export default Login;
