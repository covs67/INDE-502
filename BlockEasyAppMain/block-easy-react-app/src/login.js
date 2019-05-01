import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import {AppBar, Button} from '@material-ui/core/';
import TextField from 'material-ui/TextField';
import { checkPropTypes } from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var img = require("./images/blockeasy.JPG");


class Login extends Component {
constructor (props)
{super (props)
}
  state={Username:'', Password:'', redirectToHome:false, error:[], password_error:'', //Store password error message
  username_error:''//Store username error message
};
 handleRegister(event){
  event.stopPropagation()
  //To store the errors
  const errors={}
  var re =  new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  var emailVer=re.test(String(this.state.Username).toLowerCase())
  //alert (emailVer)
  var strongRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  var PassVer=strongRegex.test(String(this.state.Password))
  //Flag to determine that the contents are valid.
  var flagInvalid=false
  if(emailVer === false){
    errors.username_error="Email address is invalid, Re-enter."
    flagInvalid=true
  }
  //Setting the error message if password is invalid.
  if(PassVer === false){
    errors.password_error="Password is invalid, Re-enter."
    flagInvalid=true
  }
  //Set messages if data is incorrect showing user errors
    if(flagInvalid==true){
      event.preventDefault();
      this.setState({
        ...this.state,
        ...errors
      })
    }
}


render() {

return(
  <div>
   <MuiThemeProvider>
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
  <TextField label='Username' errorText={this.state.username_error} onChange={(event)=> {
this.setState({Username:event.target.value

})
 }}/>
  <br/>
  <TextField label='Password' errorText={this.state.password_error} type='Password' onChange={(event)=> {
this.setState({Password:event.target.value

})
 }}/>
  <br/>
  </div>
  <div style={{marginTop:'3%'}}>
  <Button variant='contained' color='primary' style={{marginRight:'2%'}} onClick={(event) => { this.handleRegister(event) }}>Login</Button>
  <Button variant='contained' color='primary'>Create</Button>
  </div>
  

  </center>
  </MuiThemeProvider>
  </div>


);

}
}


export default Login;
