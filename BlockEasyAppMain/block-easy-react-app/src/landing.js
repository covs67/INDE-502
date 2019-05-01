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

        
       </div>
    

);

}
}


export default Landing;
