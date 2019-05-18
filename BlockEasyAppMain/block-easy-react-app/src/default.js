import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';



class Default extends Component {
render(){
return(
    <div>
<h1>Page Not Found</h1>
<h3>It's either this page non-existent or you haven't logged in yet. Go to the <Link to={{ pathname: "/"}}>homepage</Link> to login or create your account.</h3>
</div>
);
 }
}


export default Default; 