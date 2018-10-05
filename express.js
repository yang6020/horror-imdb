const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const favicon = require('server-favicon');
const logger = require('morgan');

module.exports = app => {
  app.user(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(express.static(path.join(__dirname, 'public')));
  app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
  app.use(
    require('node-sass-middleware')({
      src: path.join(__dirname, 'public'),
      dest: path.join(__dirname, 'public'),
      sourceMap: true,
    }),
  );
};
