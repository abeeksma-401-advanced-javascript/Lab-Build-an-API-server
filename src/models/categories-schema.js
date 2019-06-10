'use strict';

const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {type: String, required: true},
  display_name: String,
  desccription: String, 
});

const Category = mongoose.model.categories ||
  mongoose.model('categories', categorySchema);

module.exports = Category;