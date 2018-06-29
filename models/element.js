var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Element = new Schema({
  name: {
    type: String
  },
  value: {
    type: String
  }
},{
    collection: 'elements'
});

module.exports = mongoose.model('Element', Element);
