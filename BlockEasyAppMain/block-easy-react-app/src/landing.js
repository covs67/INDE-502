import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Background from './images/center.bmp';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import About from './About';
import Start_Learning from './Start_Learning';
import Default from './default.js';
import Home from './Home';

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
    <Router>
      <Switch>
                    <Route exact path='/Landing' component={Home} />
                    <Route path='/startlearning' component={Start_Learning} />
                    <Route path='/about' component={About} />
                    {/* <Route path='/challenge' component={challenge} /> */}
                    {/* <Route path='/create' component={Create} /> */}
                    <Route component={Default} />
                </Switch>
      </Router>
        <AppBar color='default'>
            <Toolbar>
            <Link to={{ pathname: "/Home" }} ><img src={require('./images/blockeasy.JPG')} style={{marginTop:'2vh', height:'8vh', width:'15%', marginBottom:'1%'}} /></Link>
            <Link to={{ pathname: "/startlearning" }} ><Button variant="raisedPrimary" colour="inherit" style={button_style}>Start Learning</Button></Link>
            <Link to={{ pathname: "/" }} ><Button variant="raisedPrimary" colour="inherit" style={button_style}>Challenge Yourself</Button></Link>
            <Link to={{ pathname: "/about" }} ><Button variant="raisedPrimary" colour="inherit" style={button_style}>About</Button></Link>
            <Link to={{ pathname: "/about" }} ><Button variant="raisedPrimary" colour="inherit" style={button_style}>Contact</Button></Link>
            </Toolbar>
        </AppBar>
      
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
