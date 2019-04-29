import React,{ Component } from 'react';
import {AppBar, TextField, Button} from '@material-ui/core/';

class Create extends Component {

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
  <TextField label='Name' style={{marginBottom:'1%'}}/>
  <br/>
  <TextField label='Email address' style={{marginBottom:'1%'}}/>
  <br/>
  <TextField label='Password' style={{marginBottom:'1%'}}/>
  <br/>
  <TextField label='Password' protected style={{marginBottom:'1%'}}/>
  </div>
  <br/>
  <div style={{marginTop:'2%'}}>
  <Button variant='contained' colour='primary' style={{marginRight:'2%'}}>Create</Button>
  <Button variant='contained' colour='primary'>Cancel</Button>
  </div>
</center>
  </div>);
  }
}
export default Create;
