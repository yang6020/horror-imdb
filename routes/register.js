const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('register');
});

router.post('/', (req, res) => {
  const { body } = req;
  Users.create({
    user: body.user,
    password: body.password,
    telnum: body.telnum,
  });
});

module.exports = router;
