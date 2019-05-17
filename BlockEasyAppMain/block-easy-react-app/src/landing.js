import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link,Redirect } from 'react-router-dom';
import Home from './Home.js';
import Login from './login.js';
import startlearning from './startlearning.js'
// import challenge from './challengeyourself.js';
import Default from './default.js';
import About from './About.js';
import Create from './create.js';
import Background from './images/center.bmp';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import challengeyourself from './challengeyourself';
/**
 * This is the login component of the app.
 */
class Landing extends Component {
    state={
        login:'' ,//Element determining the login status
        redirectToLogin:'false'
    }
    constructor(props){
        super(props)
        if(this.props.location.state === undefined){
            this.state.login='false'
       }
       else{
        this.state.login='true'
       }  
    }

    handleLogout(event) {
        event.stopPropagation()
        this.setState({
            login:'false',
            redirectToLogin:'true'
        })
        this.state.login='false'
    }

    render() {
        if(this.state.redirectToLogin=='true'){
            return(
                <Redirect to='/'/>
            )
        }
        if(this.state.login=='true')
        {
            console.log(this.props.location.state.login)
        return (
            
            <Router>
            <AppBar style={{position:'fixed',top:'0'}}color="default">
            {/* Toolbar for the buttons determing the redirection for pages. */}
                <Toolbar>
                    <Link to={{ pathname: "/Landing" ,
                    state:{login:this.state.login}}} style={{ textDecoration: 'none' , marginLeft:'1%'}} >
                    <img src={require('./images/blockeasylogo2.png')} style={{height:'7vh',marginTop:'2vh'}}/>
                    </Link>
                    <Link to={{ pathname: "/startlearning" ,
                    state:{login:this.state.login}}} style={{ textDecoration: 'none',marginTop:'2vh' , marginLeft:'1%'}} >
                    <Button variant='raisedPrimary' color="inherit">
                    <p style={{fontSize : '20px',fontWeight:'bold', color:'black'}}>Start Learning</p></Button></Link>
                    <Link to={{ pathname: "/challenge" ,state:{login:this.state.login}}} style={{ textDecoration: 'none' ,marginTop:'2vh', marginLeft:'1%'}}>
                    <Button variant='raisedPrimary' color="inherit">
                    <p style={{fontSize : '20px',fontWeight:'bold', color:'black'}}>Challenge Yourself</p></Button></Link>
                    <Link to={{ pathname: "/about" ,state:{login:this.state.login}}} style={{ textDecoration: 'none',marginTop:'2vh', marginLeft:'1%' }}>
                    <Button variant='raisedPrimary' color="inherit">
                    <p style={{fontSize : '20px',fontWeight:'bold', color:'black'}}>About</p></Button></Link>
                    
                    <Link to={{ pathname: "/about" ,state:{login:this.state.login}}} style={{ textDecoration: 'none',marginTop:'2vh', marginLeft:'1%' }}>
                    <Button variant='raisedPrimary' color="inherit">
                    <p style={{fontSize : '20px',fontWeight:'bold', color:'black'}}>Contact</p></Button></Link>
                    
                    <Button variant='raisedPrimary' color="inherit" style={{marginLeft:'24%',marginTop:'2vh',float:'right'}}
                    onClick={(event) => { this.handleLogout(event) }}
                    ><p style={{fontSize : '20px',fontWeight:'550', color:'black'}}>Logout</p></Button>
                </Toolbar>
                <hr/>
      </AppBar>
      <Switch>
                    <Route exact path='/Landing' component={Home} />
                    <Route path='/startlearning' component={startlearning} />
                    <Route path='/about' component={About} />
                    <Route path='/challengeyourself' component={challengeyourself} />
                    <Route path='/create' component={Create} />
                    <Route component={Default} />
                </Switch>
                {/* Div with the second part of page displaying buttons to social sharing*/}
        <div style={{height:'100%'}}>
        <hr/>
            <Typography variant="overline" style={{float:'left',marginTop:'0.5%',marginLeft:'2%',marginRight:'60%'}} gutterBottom >Copyright 2019. Blockeasy. All rights Reserved.</Typography>
            {/* <a href="http://www.facebook.com"> <img src={require('./share/fb.ico')} style={{marginTop:'1%', height:'2%',width:'2%',marginLeft:'1%'}}/></a>
            <a href="http://www.youtube.com"> <img src={require('./share/yt.ico')} style={{marginTop:'1%', height:'2%',width:'2%',marginLeft:'1%'}}/></a>
            <a href="http://www.twitter.com"> <img src={require('./share/twitter.ico')} style={{marginTop:'1%', height:'2%',width:'2%',marginLeft:'1%'}}/></a>
            <a href="http://www.instagram.com"> <img src={require('./share/insta.ico')} style={{marginTop:'1%', height:'2%',width:'2%',marginLeft:'1%'}}/></a> */}
        </div>
            </Router>
           
        );
        }
        else{
            return(
                <Redirect to='/'/>
            )
        }
    }
}
export default Landing;