const IncomingForm = require('formidable').IncomingForm;
var http = require('http');
var util = require('util');
var fs   = require('fs-extra');
var bodyParser = require('body-parser');
var fileupload = require("express-fileupload");

var Element = require('./models/element');

module.exports = function upload(req, res) {
  var form = new IncomingForm();
  var image_name = req.query.image_name;

  form.parse(req, function(err, fields, files) {
  });

  form.on('end', function(fields, files) {
    var temp_path = this.openedFiles[0].path;
    var file_name = this.openedFiles[0].name; //Tiger.jpg   breakfast_image.png     
    var index = file_name.indexOf( "." );
    var new_name = image_name + file_name.substring(index);
    var new_location = './src/assets/';

    fs.copy(temp_path, new_location + new_name, function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log("success!")
        Element.findOne({ 'name': image_name }, function(err, element) {
          if (!element)
            return next(new Error('Could not load Document'));
          else {
            element.name = image_name;
            element.value = 'assets/' + new_name;
            element.save().then(item => {
              res.json('Update complete');
            })
              .catch(err => {
              });
          }
        });
      }
    });
  });

  form.on('end', () => {
    res.json();
  });

};

