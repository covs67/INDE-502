import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { AppBar, Button } from '@material-ui/core';
import Background from './images/center.bmp';
import { EditorFormatAlignCenter } from 'material-ui/svg-icons';
import centerFocusStrong from 'material-ui/svg-icons/image/center-focus-strong';



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
        color:'black',

    }
    
return(<div>
        <AppBar>
            <img src={require('./images/blockeasy.JPG')} style={{marginTop:'2vh', height:'8vh', width:'15%'}} />
            <Button variant="contained" colour="inherit" style={{button_style}}>Start Learning</Button>
            <Button variant="contained" colour="inherit" style={{button_style}}>Challenge Yourself</Button>
            <Button variant="contained" colour="inherit" style={{button_style}}>About</Button>
            <Button variant="contained" colour="inherit" style={{button_style}}>Contact</Button>
        </AppBar>
        <div style={home_style}><Button variant="contained" colour=""></Button>
        </div>
       </div>

);

}
}


export default Landing;
