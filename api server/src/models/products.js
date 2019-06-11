'use strict';

const uuid = require('uuid/v4');
const Product = require('./products-schema');

class Products {

  get(id) {
    if(!/^[0-9a-z]{24}$/i.test(_id)){
    return Promise.resolve(null)
    }
    return Category.findOne(_id);
  }
  
  post(entry) {
    console.log(entry);
    var product = new Product (entry);
    console.log(`this is the newly posted Product ${product}`)
    return product.save();
  }

  put(id, entry) {
  }

  delete(id) {
  }

  sanitize(entry) {
  }

}

module.exports = Products;
