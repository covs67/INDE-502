//Get required files.
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./Server/DB.js');
const businessRoute = require('./Server/business.route.js');

mongoose.Promise = global.Promise;
//Create server connection
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

  
    //Cors for compatibility
app.use(cors());

// Body Parser for getting request content
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
    //Creating route
app.use('/', businessRoute);
//Start server
app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
  });
     