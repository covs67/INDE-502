const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('./businesses.model');

// Define store route
businessRoutes.route('/add').post(function (req, res) {
    let business = new Business(req.body);
    business.save()
      .then(business => {
        res.status(200).json({'userdata': 'user added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to send to database");
      });
  });

// Define edit route
businessRoutes.route('/get/:name/:password').get(function (req, res) {
    var name = req.params.name;
    var password = req.params.password;
 var flag = false;

 Business.find(function(err, Businesses){
     if(err){
         console.log(err);
     }
     else{
         //check if user exists
         Businesses.forEach(element =>{
             //check if data matches
             if(element.email==name && element.password==password){
                flag=true
              }
         });
         //Send response accordingly
      if(flag==true){
        res.json({'found':'true'});
      }
      else{
        res.json({'found':'false'});
      }
     }
 })
})


  module.exports = businessRoutes;