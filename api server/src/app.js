'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes NEED TO BE SWITCHED TO ROUTER
// need to put in the use router shit
app.get('/categories', getCategories);
app.post('/categories', postCategories);
app.get('/categories/:id', getCategory);
app.put('/categories/:id', putCategories);
app.delete('/categories/:id', deleteCategories);

app.get('/products', getProducts);
app.post('/products', postProducts);
app.get('/products/:id', getProduct);
app.put('/products/:id', putProducts);
app.delete('/products/:id', deleteProducts);

// Catchalls
app.use(notFound);
app.use(errorHandler);

// ROUTE HANDLER FUNCTIONS



module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`) ),
};
