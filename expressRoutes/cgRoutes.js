var express = require('express');
var app = express();
var cgRoutes = express.Router();

// Require CGItem model in our routes module
var Item = require('../models/item');
//var Menu = require('../models/Menu');
//var Status = require('../models/Status');
var Element = require('../models/element');


cgRoutes.route('/').get(function (req, res) {
   Item.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});


cgRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.json(item);
  });
});


cgRoutes.route('/list/:menu').get(function (req, res) {
   var menu = req.params.menu;
   Item.find({ 'menu': menu }, function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});


cgRoutes.route('/breakfast').get(function (req, res) {
   Item.find({ 'menu': 'breakfast' }, function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

/*
cgRoutes.route('/main').get(function (req, res) {
   CGItem.find({ 'menu': 'Breakfast' }, function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});
*/
cgRoutes.route('/lunch').get(function (req, res) {
   Item.find({ 'menu': 'Lunch' }, function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

cgRoutes.route('/dinner').get(function (req, res) {
   Item.find({ 'menu': 'Dinner' }, function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

/*

cgRoutes.route('/upload').get(function (req, res) {

    form.parse(req, function(err, fields, files) {
    });

    console.log('.....Inside Upload..2...');
});

*/

/*
cgRoutes.route('/dessert').get(function (req, res) {
   CGItem.find({ 'menu': 'Dessert' }, function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});
*/

cgRoutes.route('/element').get(function (req, res) {
   Element.findOne({ 'name': req.query.name }, 'value', function (err, others){
    if(err){
      console.log(err);
    }
    else {
      res.json(others);
    }
  });
});

/*
cgRoutes.route('/menu').get(function (req, res) {
   Menu.find(function (err, menus){
    if(err){
      console.log(err);
    }
    else {
      res.json(menus);
    }
  });
});
*/
/*
cgRoutes.route('/status').get(function (req, res) {
   Status.find(function (err, statuses){
    if(err){
      console.log(err);
    }
    else {
      res.json(statuses);
    }
  });
});

cgRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  CGItem.findById(id, function (err, cgitem){
      res.json(cgitem);
  });
});

*/

cgRoutes.route('/delete/:id').get(function (req, res) {
   Item.findByIdAndRemove({_id: req.params.id}, function(err, item){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

/*
cgRoutes.route('/update_element/:id').post(function (req, res) {
   Element.findById(req.params.id, function(err, element) {
    if (!element)
      return next(new Error('Could not load Document'));
    else {

        element.name = req.body.name;
        element.value = req.body.value;


      element.save().then(cgitem => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

*/

//  Defined update route
cgRoutes.route('/update/:id').post(function (req, res) {
   Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {

        item.name = req.body.name;
        item.description = req.body.description;
        item.order = req.body.order;
        item.price = req.body.price;
        item.menu = req.body.menu;
        item.status = req.body.status;

      item.save().then(cgitem => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


cgRoutes.route('/add').post(function (req, res) {
  var item = new Item(req.body);
   item.save()
    .then(item => {
    res.status(200).json({'item': 'item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


module.exports = cgRoutes;

