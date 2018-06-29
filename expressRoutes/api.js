var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/db');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Element = require('../models/element');


router.post('/signin', function(req, res) {
   Element.findOne({ 'name': 'username' }, 'value', function (err, username){
     if(err){
       console.log(err);
     }
     else {
       Element.findOne({ 'name': 'password' }, 'value', function (err, password){
         if(err){
           console.log(err);
         }
         else {
           console.log(username.value + '...' + password.value);
           if (( req.body.username == username.value ) && ( req.body.password == password.value )){
               var token = jwt.sign(username.value, config.secret);
               res.json({success: true, token: 'JWT ' + token});
           } else {
               console.log('...Invalid User...');
               res.json({success: false, token: ''});
           }
         }
       });
     }
   });
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};


module.exports = router;

