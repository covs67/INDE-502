import React,{ Component } from 'react';
import { Typography } from '@material-ui/core';
import {Tab, Container} from "semantic-ui-react";


class Start_Learning extends Component {


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
              <img src={require('./images/snap2.JPG')} alt='blockchain basics' style={{float:'center'}}/>
              </div></Tab.Pane> </div>},
            { menuItem: 'What is block chain technology?', render: () => 
            <div style={{width:'100%' }}>
            <Tab.Pane><div >
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
            <img src={require('./images/snap2.JPG')} alt='blockchain basics' style={{float:'center'}}/>
            </div></Tab.Pane> </div>},
            { menuItem: 'What is block chain technology?', render: () => <div style={{width:'100%' }}>
            <Tab.Pane><div >
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
            <img src={require('./images/snap2.JPG')} alt='blockchain basics' style={{float:'center'}}/>
            </div></Tab.Pane> </div> },
          ]
          const styleLink = document.createElement("link");
          styleLink.rel = "stylesheet";
          styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
          document.head.appendChild(styleLink);
    

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
}



export default Start_Learning;