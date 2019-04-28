import React,{ Component } from 'react';
import {AppBar} from '@material-ui/core/';

class Create extends Component {

render() {
return(
  <div>
    <AppBar position="static" color="default">
      <div style={{height:'50%',width:'50%',marginTop:'5px'}}>
        <h1>Login</h1>
      </div>
    </AppBar>
  </div>);
  }
}
export default Create;
