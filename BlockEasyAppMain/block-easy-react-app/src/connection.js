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
    
  );

  
    //Cors for compatibility
app.use(cors());

// Body Parser for getting request content
app.use(bodyParser.urlencoded({extended: true}));

    //Creating route

//Start server
app.listen(PORT, function(){

  });
     