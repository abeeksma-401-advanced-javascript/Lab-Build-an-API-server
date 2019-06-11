'use strict';

const express = require('express');
const catRouter = express.Router();

const Categories = require('../models/categories');
const categories = new Categories();

const auth = require('../auth/middleware')

//TODO: put all the auth mayhem in 
catRouter.get('/categories', auth(), getCategories);
catRouter.post('/categories', auth(), postCategories);
catRouter.get('/categories/:id', auth(), getCategory);
catRouter.put('/categories/:id', auth(), putCategories);
catRouter.delete('/categories/:id', auth(), deleteCategories);


function getCategories(request, response, next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

function getCategory(request, response, next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function postCategories(request, response, next) {
  // expects the record that was just added to the database
  categories.post(request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function putCategories(request, response, next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function deleteCategories(request, response, next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


module.exports = catRouter;