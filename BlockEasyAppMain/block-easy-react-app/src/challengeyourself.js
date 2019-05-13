
import React, { Component } from 'react';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import {  Link,Redirect } from "react-router-dom";
/**
 * This component allows user to test their knowledge about block chains.
 */
class challengeyourself extends Component {
  //State storing the login status
    state={
        login:'',//Element determining the login status
        redirectToLogin:'false'
    }
      constructor(props){
        super(props)
        //Check if the user has logged in.
        //If yes then set it to be true and if not then set the flag appropriately to show output.
        this.state.login=this.props.location.state.login 
    }

    handleLogout(event) {
      event.stopPropagation()
      this.setState({
          login:'false',
          redirectToLogin:'false'
      })
    
    }
    //Method to render the visual data.
  render(){
    if(this.state.redirectToLogin=='true')
    return(
        <Redirect to='/' />
    )

    //If the user has logged in, Display page content, else show message.
    if(this.state.login=='true')
      return(
        //Div representing entire page
          <div style={{ marginTop:'6%'}}>
              <center>
               
      {/* Div with the second part of page displaying flash game*/}
      <div style={{marginTop:'5%', marginBottom:'2%'}}>
                <embed width="1100" height="650" base="https://external.kongregate-games.com/gamez/0000/6057/live/" src="https://external.kongregate-games.com/gamez/0000/6057/live/embeddable_6057.swf" type="application/x-shockwave-flash"></embed><br/>
                
                </div>
                </center>                
    </div>
      )
      //Message to be displayed if the user has not logged in.
      else{
        return(
            <div style={{width: '100%',marginTop:'40vh'}}>
                <center>
                <h1> You have not logged in, Please login to continue </h1>
                <h2><a href='/'>Click here to go to login page</a></h2>
                </center>
            </div>
        )
    }
  }
}


export default challengeyourself;