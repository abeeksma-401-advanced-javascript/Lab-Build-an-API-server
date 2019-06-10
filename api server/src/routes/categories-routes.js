'use strict';

const express = require('express');
const catRouter = express.Router();

const CatRepository = require('../models/categories');
const catRepository = new CatRepository();


//put in all the various routes from app.js
catRouter.get('/categories', (req, res, next) => {
  catRepository.getAll()
    .then(data => {
      res.json(data);
    })
    .catch(next);
  //.catch(err => next(err));
});



// app.get('/categories', getCategories);
// app.post('/categories', postCategories);
// app.get('/categories/:id', getCategory);
// app.put('/categories/:id', putCategories);
// app.delete('/categories/:id', deleteCategories);


module.exports = catRouter;