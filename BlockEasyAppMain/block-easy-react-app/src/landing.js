import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Background from './images/center.bmp';
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';
import centerFocusStrong from 'material-ui/svg-icons/image/center-focus-strong';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import color from '@material-ui/core/colors/indigo';


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

        <div style={home_style}>
        <Button variant="raised" color='primary' style={{width:'15%', height:'10%', borderRadius:'25px', position:'absolute', bottom:100 }}>
        Begin Tutorial
        </Button>
        </div>
        <div style={{display:'inline-block', width:'33%', marginTop:'3%'}}><img src={require('./images/realeastate.JPG')}/>
    <br/><p style={{fontSize:'20px', width:'65%'}}>How Will the BlockChain Tech Change Real Estate?</p><br/>

    <Button variant='raised' color='primary'> Read Topic</Button><hr style={{width:'80%', marginRight:'20%'}}/></div>
    <div style={{display:'inline-block', width:'33%', marginTop:'3%'}}><img src={require('./images/realeastate.JPG')}/>

    <br/><p style={{fontSize:'20px', width:'65%'}}>How Will the BlockChain Tech Change Real Estate?</p><br/>
    <Button variant='raised' color='primary'> Read Topic</Button><hr style={{width:'80%', marginRight:'20%'}}/></div>

    <div style={{display:'inline-block', width:'33%', marginTop:'3%'}}><img src={require('./images/realeastate.JPG')}/>
    <br/><p style={{fontSize:'20px', width:'65%'}}>How Will the BlockChain Tech Change Real Estate?</p><br/>
    <Button variant='raised' color='primary'> Read Topic</Button><hr style={{width:'80%', marginRight:'20%'}}/></div>

    <center><Button variant='raised' style={{margin:'5%', width:'18%', height:'10vh', borderRadius:'25px', background: 'linear-gradient(45deg, #9752FF 30%, #6600FF 90%)'}} color='primary'>VIEW ALL TOPICS</Button></center>
    <center><h1>A Groundbreaking Learning Experience</h1></center>
    <div style={{width:'20%', margin:'2%', display:'inline-block'}} >
        <center>
            <h1>1</h1>
            <h3>Unlimited Course Access</h3>
            <p>Choose whatever you want when you want it.  From 30+ topics and counting, we are sure you’d love it.</p>
        </center>
        </div>

        <div style={{width:'20%', margin:'2%', display:'inline-block'}}>
        <center>
            <h1>2</h1>
            <h3>Unlimited Course Access</h3>
            <p>Choose whatever you want when you want it.  From 30+ topics and counting, we are sure you’d love it.</p>
        </center>
        </div>

        <div style={{width:'20%', margin:'2%', display:'inline-block'}}>
        <center>
            <h1>3</h1>
            <h3>Unlimited Course Access</h3>
            <p>Choose whatever you want when you want it.  From 30+ topics and counting, we are sure you’d love it.</p>
        </center>
        </div>

        <div style={{width:'20%', margin:'2%', display:'inline-block'}}>
        <center>
            <h1>4</h1>
            <h3>Unlimited Course Access</h3>
            <p>Choose whatever you want when you want it.  From 30+ topics and counting, we are sure you’d love it.</p>
        </center>
        </div>
        <h1>Fast Track Your Blockchain Learning With Our Easy-To-Use Tools</h1>
        <img src=''/>
       </div>
    

);

}
}


export default Landing;
