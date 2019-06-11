'use strict';

const Category = require('./categories-schema');

class Categories {

//get a category
  get(_id) {
//checks for a 24 character id containing 0-9 or a-z as characters (case insensitive)
    if(!/^[0-9a-z]{24}$/i.test(_id))
      return Promise.resolve(null)

    return Category.findOne(_id);
  }

  //get all categories
  getAll(){
    return Category.find();
  }
  
//create a category
  post(record) {
    console.log(record);
    var category = new Category (record);
    console.log(`this is the newly posted Cat ${category}`)
    return category.save();
  }

//update a category?  
  async put(_id, record){
    let updatedCat = await Category.findOne(_id);
    updatedCat = Object.assign(save, entry)//figure out what the hells goes in to this
    await updatedCat.save();
  }
    

//DESTROY!!!!  
  delete(_id) {
    Cateogory.deleteOne()
  }

}

module.exports = Categories;
