'use strict';

const express = require('express');
const prodRouter = express.Router();

const ProRepository = require('../models/products');
const proRepository = new ProRepository();

prodRouter.get('/products', (req, res, next) => {
  proRepository.getAll()
    .then(data => {
      res.json(data);
    })
    .catch(next);
  //.catch(err => next(err));
});

module.exports = prodRouter;