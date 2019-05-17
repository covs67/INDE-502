import React, { Component } from 'react';
import Background from './images/headerimg1.png';
import {AppBar,Toolbar,Typography,Button} from '@material-ui/core'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class Home extends Component {

    
    render(){
        const home_style = {
            marginTop:'6%',
            width:'100%',
            height:'80vh',
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }

        return(
<div>
<div style={home_style}>
<Link to={{ pathname: "/startlearning" }} ><Button variant="raised" color='primary' style={{width:'15%', height:'10%', borderRadius:'25px', position:'absolute', bottom:100 }}>
        Begin Tutorial
        </Button></Link>
        </div>
        <div style={{display:'inline-block', width:'33%', marginTop:'3%'}}><img src={require('./images/real.jpg')}/>
    <br/><p style={{fontSize:'20px', width:'65%'}}>How Will the BlockChain Tech Change Real Estate?</p><br/>

    <Link to={{ pathname: "/startlearning" }} ><Button variant='raised' color='primary'> Read Topic</Button></Link><hr style={{width:'80%', marginRight:'20%'}}/></div>
    <div style={{display:'inline-block', width:'33%', marginTop:'3%'}}><img src={require('./images/real.jpg')}/>

    <br/><p style={{fontSize:'20px', width:'65%'}}>How Will the BlockChain Tech Change Real Estate?</p><br/>
    <Link to={{ pathname: "/startlearning" }} ><Button variant='raised' color='primary'> Read Topic</Button></Link><hr style={{width:'80%', marginRight:'20%'}}/></div>

    <div style={{display:'inline-block', width:'33%', marginTop:'3%'}}><img src={require('./images/real.jpg')}/>
    <br/><p style={{fontSize:'20px', width:'65%'}}>How Will the BlockChain Tech Change Real Estate?</p><br/>
    <Link to={{ pathname: "/startlearning" }} ><Button variant='raised' color='primary'> Read Topic</Button></Link><hr style={{width:'80%', marginRight:'20%'}}/></div>

    <center><Link to={{ pathname: "/startlearning" }} ><Button variant='raised' style={{margin:'5%', width:'18%', height:'10vh', borderRadius:'25px', background: 'linear-gradient(45deg, #9752FF 30%, #6600FF 90%)'}} color='primary'>VIEW ALL TOPICS</Button></Link></center>
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
        <center><h1>Fast Track Your Blockchain Learning With Our Easy-To-Use Tools</h1>
        
        <img src={require('./images/tools12.png')}/>
        <div style={{display:'inline-block'}}>
        
        <p style={{width:'30%', float:'left', marginLeft:'15%', marginTop:'5%'}}><h3>Ease of Use</h3>This is one of our best features and the description for it. This is one of our best features and the description for it. </p>
        <img src={require('./images/easyuse1.jpg')} style={{float:'right', marginRight:'10%'}}/>
        </div>
        <div style={{display:'inline-block'}}>
        
        <p style={{width:'30%', float:'right', marginRight:'15%', marginTop:'5%'}}><h3>Fun Challenge Questions and Answers</h3>This is one of our best features and the description for it. This is one of our best features and the description for it. </p>
        <img src={require('./images/funqa.jpg')} style={{float:'left', marginLeft:'10%'}}/>
        </div>
        <div style={{background:'linear-gradient(45deg, #6600FF 30%, #37008A 90%)', height:'25vh' }}>
        <p style={{color:'white', fontSize:'50px', marginTop:'10px'}}>Make A Start</p>
        
        <p style={{color:'white', fontSize:'20px'}}>It’s not just about training. It’s about progress. A platform that allows you to take control of your career by learning the right skills at the right time.</p>
        <Link to={{ pathname: "/startlearning" }} ><Button variant='Raised' color='primary' style={{borderRadius:'25px', backgroundColor:'white', height:'5vh', width:'20vh', marginBottom:'10px'}}>Start Now</Button></Link>
        </div>
        </center>
</div>
        )
    }
}


export default Home;