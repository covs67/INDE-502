import React,{ Component } from 'react';
import { Typography } from '@material-ui/core';
import {Tab, Container} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route,Link,Redirect } from 'react-router-dom';


class startlearning extends Component {
  state={
    login:'false'
  }
constructor (props){
super (props)
if(this.props.location.state === undefined){
  this.state.login='false'
}
else{
this.state.login='true'
}  

}

    render(){
        const panes = [
            { menuItem: 'What is block chain technology?', render: () => 
            <div style={{width:'100%' }}>
            <Tab.Pane ><div >
              <h1>What is the Blockchain Technology?</h1>
              <p style={{fontSize : '22px'}}>
                        The blockchain is an undeniably ingenious invention – 
              the brainchild of a person or group of people known by the pseudonym, 
              Satoshi Nakamoto. By allowing digital information to be distributed but not 
              copied, blockchain technology created the backbone of a new type of 
              internet. Originally devised for the digital currency, Bitcoin, the tech 
              community has now found other potential uses for the technology.
    
              In this guide, we are going to explain to you what the blockchain 
              technology is, and what its properties are that make it so unique.
              </p>
              <img src={require('./images/infographics12.jpg')} alt='blockchain basics' style={{float:'center'}}/>
              </div></Tab.Pane> </div>},
            { menuItem: 'What do Cryptocurrencies Mean?', render: () => 
            <div style={{width:'100%' }}>
            <Tab.Pane><div >
            <h1>What do Cryptocurrencies Mean?</h1>
            <p style={{fontSize : '22px'}}>
                      The blockchain is an undeniably ingenious invention – 
            the brainchild of a person or group of people known by the pseudonym, 
            Satoshi Nakamoto. By allowing digital information to be distributed but not 
            copied, blockchain technology created the backbone of a new type of 
            internet. Originally devised for the digital currency, Bitcoin, the tech 
            community has now found other potential uses for the technology.
    
            In this guide, we are going to explain to you what the blockchain 
            technology is, and what its properties are that make it so unique.
            </p>
            <img src={require('./images/infographics12.jpg')} alt='blockchain basics' style={{float:'center'}}/>
            </div></Tab.Pane> </div>},
            { menuItem: 'Blockchain vs Cryptocurrrencies', render: () => <div style={{width:'100%' }}>
            <Tab.Pane><div >
            <h1>Blockchain vs Cryptocurrrencies</h1>
            <p style={{fontSize : '22px'}}>
                      The blockchain is an undeniably ingenious invention – 
            the brainchild of a person or group of people known by the pseudonym, 
            Satoshi Nakamoto. By allowing digital information to be distributed but not 
            copied, blockchain technology created the backbone of a new type of 
            internet. Originally devised for the digital currency, Bitcoin, the tech 
            community has now found other potential uses for the technology.
    
            In this guide, we are going to explain to you what the blockchain 
            technology is, and what its properties are that make it so unique.
            </p>
            <img src={require('./images/infographics12.jpg')} alt='blockchain basics' style={{float:'center'}}/>
            </div></Tab.Pane> </div> },
          ]
          const styleLink = document.createElement("link");
          styleLink.rel = "stylesheet";
          styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
          document.head.appendChild(styleLink);
    
          if(this.state.login='true'){
            return(
              <div style={{width:'100%'}}>
              <img src={require('./images/snap23.jpg')} style={{height:'60vh', marginLeft:'25%', width:'60%', marginTop:'6%', marginRight:'10vh'}}/>
              <div style={{marginTop:'1%'}}><h1 style={{display:'inline', marginLeft:'3%'}}>Topics</h1>
              <h1 style={{display:'inline', marginLeft:'23%'}}>Explanations</h1>
              
              <Container style={{ marginLeft: 10,width:'100%',float:'left' }}>
                  <hr/>
                    <h1 style={{color:'purple',marginLeft:'17%'}}>Topics &nbsp;&nbsp;&nbsp;&nbsp; Explanations</h1>
                    <hr/>
                  <Tab  menu={{ fluid: true, vertical: true , tabular: true}} panes={panes} />
                  <hr/>
                </Container>
              </div>
              </div>
                      )
          }
        else{
          return(
          <Redirect to='/'/>
          )
        }
    }
}



export default startlearning;