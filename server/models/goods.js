var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var produtSchema = new Schema({
  "_id": Object,
  "productId" : {type: String},
  "productName" : String,
  "salePrice" : Number,
  "productImage" : String,
});

module.exports = mongoose.model('Good',produtSchema);