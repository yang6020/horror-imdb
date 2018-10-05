const index = require('./routes/index');
const movies = require('./routes/movies');
const express = require('express');
const path = require('path');
const app = express();
const favicon = require('serve-favicon');

require('./express')(app);
app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false,
    sourceMap: true,
  }),
  express.static(path.join(__dirname, 'public')),
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use('/', index);
app.use('/movies', movies);

module.exports = app;
