const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let userdata = new Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
  },{
      collection: 'userdata'
  });
  
  module.exports = mongoose.model('userdata', userdata);