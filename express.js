const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const logger = require('morgan');

module.exports = app => {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
