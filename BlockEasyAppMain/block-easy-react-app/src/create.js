import React,{ Component } from 'react';
import {AppBar, TextField, Button} from '@material-ui/core/';

class Create extends Component {

  constructor (props)
  {super (props)
  }
    state={Name:'', Email:'', Password:'', Password2:'', redirectToHome:false, error:[], name_error:'', //Store name error message
    email_error:'', //Store email error message 
    password_error:'', //Store password error message
    password2_error:''   //Store password2 error message  
  };
   handleRegister(event){
  // alert(this.state.Name)
  // alert(this.state.Email)
  // alert(this.state.Password)
  // alert(this.state.Password2)
  event.stopPropagation()
  //To store the errors
  const errors={}
  var nameVer =  new RegExp(/[a-zA-Z]$/);
  var emailVer=nameVer.test(String(this.state.Name))

  var re =  new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  var emailVer=re.test(String(this.state.Email).toLowerCase())
  //alert (emailVer)
  var strongRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  var PassVer=strongRegex.test(String(this.state.Password))
  var PassVer=strongRegex.test(String(this.state.Password2))



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
    <AppBar position="static" color="default">
      <div style={{height:'50%',width:'50%',marginTop:'5px'}}>
        <h1>Create</h1>
      </div>
    </AppBar>
<center>
  <img src={require('./images/blockeasy.JPG')} style={{marginTop:'2%'}}>
  </img>
  <div style={{alignItems:'space-between'}}>
  <TextField label='Name' style={{marginBottom:'1%'}} onChange={(event)=> {
this.setState({Name:event.target.value
})
 }}/>
  <br/>
  <TextField label='Email address' style={{marginBottom:'1%'}} onChange={(event)=> {
this.setState({Email:event.target.value
})
 }}/>
  <br/>
  <TextField label='Password' style={{marginBottom:'1%'}} onChange={(event)=> {
this.setState({Password:event.target.value
})
 }}/>
  <br/>
  <TextField label='Password' type='Password2' type='Password' style={{marginBottom:'1%'}} onChange={(event)=> {
this.setState({Password2:event.target.value
})
 }} />
  </div>
  <br/>
  <div style={{marginTop:'2%'}}>
  <Button variant='contained' colour='primary' style={{marginRight:'2%'}} onClick={(event) => { this.handleRegister(event) }}>Create</Button>
  <Button variant='contained' colour='primary'>Cancel</Button>
  </div>
</center>
  </div>);
  }
}
export default Create;
