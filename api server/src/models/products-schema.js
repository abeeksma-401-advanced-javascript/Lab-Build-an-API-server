'use strict';

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true},
  display_name: String,
  catergory: String,
  description: String,
});

const Product = mongoose.model.product ||
  mongoose.model('product', productSchema);

module.exports  = Products