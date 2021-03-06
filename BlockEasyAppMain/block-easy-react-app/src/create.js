import React,{ Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Button, Link} from '@material-ui/core/';
import {TextField} from 'material-ui';
import axios from 'axios';
class Create extends Component {

  constructor (props)
  {super (props);
  
    this.handleCreateClick = this.handleCreateClick.bind(this);

    }
    
    state={
      Name:'', 
      Email:'', 
      Password:'', 
      Password2:'', 
      redirectToHome:false, 
      error:[], 
      name_error:'', //Store name error message
      email_error:'', //Store email error message 
      password_error:'', //Store password error message
      password2_error:''   //Store password2 error message
  
  };


    handleCreateClick(event) {

  // alert(this.state.Name)
  // alert(this.state.Email)
  // alert(this.state.Password)
  // alert(this.state.Password2)
  event.preventDefault()
  //To store the errors
  const errors={}
  var nameVer =  new RegExp(/[a-zA-Z]$/);
  var nameVer=nameVer.test(String(this.state.Name))
 //alert(nameVer)
 //Regex to check email is valid
  var re =  new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  var emailVer=re.test(String(this.state.Email).toLowerCase())
  //alert (emailVer)
  //Regex to check password is valid
  var strongRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  var PassVer=strongRegex.test(String(this.state.Password))
  //alert(PassVer)
  var PassVer2=strongRegex.test(String(this.state.Password2))




  //Flag to determine that the contents are valid.
  var flagInvalid=false
  if(nameVer === false){
    errors.name_error="Name address is invalid, Re-enter."
    flagInvalid=true
  }
  if(emailVer === false){
    errors.email_error="Email address is invalid, Re-enter."
    flagInvalid=true
  }
  //Setting the error message if password is invalid.
  if(PassVer === false){
    errors.password_error="Password is invalid, Re-enter. Must be 8 characters or longer, must contain uppercase, lowercase, number and a special character"
    flagInvalid=true
  }

  if (this.state.Password === this.state.Password2) {
   PassVer2 = true;
  }
  else {
    //PassVer2 = false;
    flagInvalid = true;
    errors.password2_error="Password Mismatch. Please make sure both passwords match before proceeding."
    
  }
  
  //alert(flagInvalid)
  //Set messages if data is incorrect showing user errors

    if(flagInvalid==true){
      event.preventDefault();
      this.setState({
        ...this.state,
        ...errors
      })
    }

    //If everything is valid, store to database.
    if(flagInvalid==false){
      const obj = {
        name: this.state.Name,
        email: this.state.Email,
        password: this.state.Password
      };
//Sending request along with data to server.
axios.post('http://localhost:4000/add', obj)
.then(res => {
  //if data is added successfully, redirect to home
  if(res.data.userdata=='user added successfully'){
    alert('User registration successful! Please go to login page and sign in to your new account')
    this.setState({
      redirectToHome:true
    })
  }
  //Else send error message.
  else{
    alert('something went wrong please try again!')
  }
});

this.setState({
  Name: '',
  Email: '',
  Password: '',
  Password2: ''
})

    }


  }
/**
       * Rendering the Create User account page below.
       */
render() {
return(
  <div>
    <MuiThemeProvider>
    <AppBar position="static" color="default">
      <div style={{height:'50%',width:'50%',marginTop:'5px'}}>
        <h1>Create</h1>
      </div>
      
    </AppBar>
<center>
  <img src={require('./images/blockeasylogo2.png')} style={{marginTop:'2%'}}>
  </img>
  <div style={{alignItems:'space-between'}}>
  <TextField label='Name' floatingLabelText="Enter your Name" errorText={this.state.name_error} style={{marginBottom:'1%'}} onChange={(event)=> {
this.setState({Name:event.target.value
})
 }}/>
  <br/>
  <TextField label='Email address' floatingLabelText="Enter your Email" errorText={this.state.email_error} style={{marginBottom:'1%'}} onChange={(event)=> {
this.setState({Email:event.target.value
})
 }}/>
  <br/>
  <TextField label='Password' floatingLabelText="Enter Password" errorText={this.state.password_error} style={{marginBottom:'1%'}} onChange={(event)=> {
this.setState({Password:event.target.value
})
 }}/>
  <br/>
  <TextField label='Password' floatingLabelText="Re-enter Password" errorText={this.state.password2_error} type='Password2' type='Password' style={{marginBottom:'1%'}} onChange={(event)=> {
this.setState({Password2:event.target.value
})
 }} />
  </div>
  <br/>
  <div style={{marginTop:'2%'}}>
  <Button variant='contained' colour='primary' style={{marginRight:'2%'}} onClick={(event) => { this.handleCreateClick(event) }}>Create</Button>
  <Link to={{ pathname: "/" }}><Button variant='contained' colour='primary'>Cancel</Button></Link>
  
  </div>
</center>
</MuiThemeProvider>
  </div>);
  }
}
export default Create;
