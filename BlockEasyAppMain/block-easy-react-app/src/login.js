import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import {AppBar, Button, TextField} from '@material-ui/core/';
var img = require("./images/blockeasy.JPG");

class Login extends Component {

render() {

return(
  <div>
    
  <AppBar position="static" color="default">
        <div style={{height:'50%',width:'50%',marginTop:'5px'}}>
       <h1>Login</h1>
       </div>
  </AppBar>
  <center>
  <img src = {img} style={{marginTop:'2%'}}
       />
  <br/>

  <TextField label='Username' />
  <br/>
  <TextField label='Password' protected />
  <br/>
  <div style={{marginTop:'3%'}}>
  <Button variant='contained' color='primary' style={{marginRight:'2%'}}>Login</Button>
  <Button variant='contained' color='primary'>Create</Button>
  </div>
  

  </center>
   </div>
  

);

}
}


export default Login;
