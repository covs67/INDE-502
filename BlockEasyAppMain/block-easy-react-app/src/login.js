import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import {AppBar, Button, TextField} from '@material-ui/core/';
import { checkPropTypes } from 'prop-types';
var img = require("./images/blockeasy.JPG");

class Login extends Component {
constructor (props)
{super (props)
}
  state={Username:'', Password:'', redirectToHome:false};
 handleRegister(event){

}


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
  <div>
  <TextField label='Username' />
  <br/>
  <TextField label='Password' protected />
  <br/>
  </div>
  <div style={{marginTop:'3%'}}>
  <Button variant='contained' color='primary' style={{marginRight:'2%'}} onClick={(event) => { this.handleRegister(event) }}>Login</Button>
  <Button variant='contained' color='primary'>Create</Button>
  </div>
  

  </center>
   </div>
  

);

}
}


export default Login;
