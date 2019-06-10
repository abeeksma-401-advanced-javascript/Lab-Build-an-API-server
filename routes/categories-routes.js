'use strict';

const express = require('express');
const router = express.Router();

const CatRepository = require('../src/models/categories');
const catRepository = new Categories();


//put in all the various routes from app.js
router.get('/categories', (req, res, next) => {
  catRepository.getAll()
    .then(data => {
      res.json(data);
    })
    .catch(next);
    //.catch(err => next(err));
});

module.exports = router;