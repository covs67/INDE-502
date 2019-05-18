const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = 

// Define store route
businessRoutes.route('/add').post(function (req, res) {
    let business = new Business(req.body);
    business.save()
      
      .catch(err => {
      res.status(400).send("unable to send to database");
      });
  });

// Define edit route
businessRoutes.route('/get/:name/:password').get(function (req, res) {e
    var name = req.params.name;
    
 var flag = false;




  module.exports = businessRoutes;