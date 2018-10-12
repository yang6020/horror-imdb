const express = require('express');
const router = express.Router();
const movieController = require('../controller/movieController');

router.get('/', (req, res, next) => {
  movieController
    .findAllMovie(req, res)
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server errro occured' });
    });
});

router.get('/:id', (req, res, next) => {
  movieController
    .findMovieById(req, res)
    .then(movies => {
      res.render('movie', { movies });
    })
    .catch(err => {
      res.status(500).json({ message: 'internal server errro occured' });
    });
});

module.exports = router;
