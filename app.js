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

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');
app.use('/', index);
