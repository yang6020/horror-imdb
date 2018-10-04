const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const Movie = require('./models/Movie');

mongoose
  .connect(
    'mongodb://localhost/lab-express-cinema',
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });
