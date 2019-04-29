import React,{ Component } from 'react';
import {AppBar, TextField, Button} from '@material-ui/core/';

class Create extends Component {

  constructor (props)
  {super (props)
  }
    state={Name:'', Email:'', Password:'', Password2:'', redirectToHome:false};
   handleRegister(event){
  // alert(this.state.Name)
  // alert(this.state.Email)
  // alert(this.state.Password)
  // alert(this.state.Password2)
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
