import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Background from './images/center.bmp';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import About from './About';
import Start_Learning from './Start_Learning';
import Default from './default.js';

class Landing extends Component {
render() {

    const home_style = {
        marginTop:'6%',
        width:'100%',
        height:'80vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const button_style ={
        fontSize : '20px',
        fontWeight:'bold', 
        marginLeft:'5%'

    }
    
return(<div>
        <AppBar color='default'>
            <Toolbar>
            <img src={require('./images/blockeasy.JPG')} style={{marginTop:'2vh', height:'8vh', width:'15%', marginBottom:'1%'}} />
            <Button variant="raisedPrimary" colour="inherit" style={button_style}>Start Learning</Button>
            <Button variant="raisedPrimary" colour="inherit" style={button_style}>Challenge Yourself</Button>
            <Button variant="raisedPrimary" colour="inherit" style={button_style}>About</Button>
            <Button variant="raisedPrimary" colour="inherit" style={button_style}>Contact</Button>
            </Toolbar>
        </AppBar>
      <Router>
          <Switch>
          <Route exact path='/Landing' component={Start_Learning} />
          <Route exact path='/Start_Learning' component={Start_Learning}/>
           <Route exact path='/About' component={About} /> 
           <Route component={Default} />
            {/* <Route exact path='/Landing' component={Landing} />
            <Route exact path='/Home' component={Home} />
            <Route path='/create' component={Create} /> */}
              </Switch>
      </Router>
      <div>

      <p style={{float:'left', marginLeft:'1%'}}>&copy; Copyright 2019. Blockeasy. All rights Reserved.</p>
      <div id="social_images" style={{marginLeft:'90%'}}>
      <img src={require('./images/fb.ico')} style={{height:'40%', width:'20%'}}/>
      <img src={require('./images/insta.ico')} style={{height:'40%', width:'20%'}}/>
      <img src={require('./images/twitter.ico')} style={{height:'40%', width:'20%'}}/>
      <img src={require('./images/yt.ico')} style={{height:'40%', width:'20%'}}/>
      </div>
      </div>
        
       </div>
    

);

}
}


export default Landing;
