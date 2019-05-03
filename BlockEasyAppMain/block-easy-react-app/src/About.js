import React,{ Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar, Button, Typography} from '@material-ui/core/';
import {TextField} from 'material-ui';



class About extends Component {
render(){
    return(
<div style={{marginTop:'6%'}}>   
         
         <center>
           <br/>
           {/* About me header */}
         <p style={{color:'blue', fontSize : '28px',fontWeight:'bold'}}>About</p>
         <div style={{ height:'50%'}}>
          {/* About me content */}
         <img src={require('./images/about.JPG')} style={{float:'left', width:'30%',height:'5%'}}/>

             <p style={{ width:'30%', fontSize : '20px'}}> 
             <h2>This is a little about us.</h2>
               This is one of our best features and the 
               description for it. This is one of our best 
               features and the description for it. This is
               one of our best features and the
               description for it. 
               This is one of our best features and the 
               description for it. This is one of our best 
               features and the description for it. This is
               one of our best features and the
               description for it. 
               This is one of our best features and the 
               description for it. This is one of our best 
               features and the description for it. This is
               one of our best features and the
               description for it. 
             </p>
             <br style={{clear:"both"}}/>
             </div>
         
             <div style={{width: '50%'}}>
             {/* Contact information */}
         <h1 style={{color:'#6600FF'}}>Contact</h1>
         <h2>Head Office Location</h2>
         <p style={{marginLeft:'25%', fontSize : '20px'}} ALIGN='LEFT'><b>ADDRESS:</b> 91 Oxford St., 3rd Floor, Torquay, TOB 141, UK <br/>
         <b>Phone Number:</b> +44 888-xxx-xxxx<br/>
         <b> Email:</b> support@blockeasy.io</p>
         </div>
           {/* Footer */}
         <div style={{display:'inline-block' ,width:'100%', background:'linear-gradient(45deg, #6600FF 30%, #37008A 90%)',marginTop:'2%',color:'white'}}>
         <Typography variant="h4" gutterBottom style={{marginTop:'2%',color:'white'}}> Make a start</Typography>
             <p style={{ fontSize : '20px'}}> It’s not just about training. It’s about progress. A platform that allows you to take control of your
               career by learning the right skills at the right time.
             </p>
             
     
                 <Button style={{margin:'1%',fontSize : '20px',borderRadius: '25px',height:'40px', width:'16%',backgroundColor:'white'}} variant="default" color="primary" >
                 START NOW
                 </Button>
             </div>   
            
             
             </center>
             </div>


    )
}
}


export default About;