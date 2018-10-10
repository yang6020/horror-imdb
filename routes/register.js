const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const bcrypt = require('bcrypt');

const saltRounds = 10;
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('register');
});

router.post('/', (req, res) => {
  const { body } = req;
  bcrypt.hash(body.password, saltRounds, (err, hash) => {
    if (err) {
      console.log('cannot hash password');
    } else {
      Users.create({
        user: body.user,
        password: hash,
        telnum: body.telnum,
      });
    }
  });
});

module.exports = router;
