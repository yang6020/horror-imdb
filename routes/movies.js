const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
  console.log(Movie);
  Movie.find({})
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(e => {
      console.log(e);
    });
});

module.exports = router;
