import React, { Component } from 'react';
import {AppBar, Button} from '@material-ui/core/';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import { BrowserRouter as Router, Redirect, Link, Switch, Route } from 'react-router-dom';
var img = require("./images/blockeasylogo2.png");


class Login extends Component {
constructor (props)
{super (props)
}
state={
  Username:'', 
  Password:'', 
  redirectToHome:false, 
  error:[], 
  password_error:'', //Store password error message
  username_error:''//Store username error message
};  


 handleRegister(event){
  event.preventDefault()
  //To store the errors
  const errors={}
  var re =  new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  var emailVer=re.test(String(this.state.Username).toLowerCase())
  //alert (emailVer)
  var strongRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  var PassVer=strongRegex.test(String(this.state.Password))
  //Flag to determine that the contents are valid.
  var flagInvalid=false
  
  //Setting the error message if email id is invalid.
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
    /* else (  
      
      this.setState({
redirectToHome: 'true'
    })

    )} */

    else{
      //getting response from server to check if the user has entered correct information.
      axios.get('http://localhost:4000/get/'+this.state.Username+'/'+this.state.Password)
          .then(response => {
            if(response.data.found=="true"){
              this.setState({ //If data is correct redirect to Home
                redirectToHome:true
              })
            }
            else{ //Else show message to re-enter.
              alert('Account not found, Create a new one or enter correct details')
            }
          })
          .catch(function (error) {
          })
    }
}

//Render the login page
render() {
  

if(this.state.redirectToHome){
  return(
<Redirect to={{
          pathname: '/Landing',
          state:{login:'true'}, 
      }}/>
  )
}
else {

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
    <TextField label='Username' floatingLabelText="Enter username here" type="email" errorText={this.state.username_error} onChange={(event)=> {
  this.setState({Username:event.target.value
  
  })
   }}/>
    <br/>
    <TextField label='Password' floatingLabelText="Enter password here" errorText={this.state.password_error} type='Password' onChange={(event)=> {
  this.setState({Password:event.target.value
  
  })
   }}/>
    <br/>
    </div>
    
    <div style={{marginTop:'3%'}}>
   <Button variant='contained' color='primary' style={{marginRight:'2%'}} onClick={(event) => { this.handleRegister(event) }}>Login</Button>
    <Link to={{ pathname: "/create" }} ><Button variant='contained' color='primary'>Create An Account</Button></Link>
    </div>
    
  
    </center>
    </MuiThemeProvider>
    </div>
  
  
  );
}


}
}


export default Login;
