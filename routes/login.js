const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const bcrypt = require('bcrypt');
/* GET home page */
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  const { body } = req;
  Users.findOne({ user: body.user })
    .then((err, user) => {
      if (err) {
        res.status(401).json({ message: 'invalid user/password' });
      } else {
        bcrypt.compare(body.password, user.password, (err, auth) => {
          if (err) {
          } else {
            if (auth) {
              res.status(200).json({ success: true });
            } else {
              res.status(401).json({ message: 'invalid user/password' });
            }
          }
        });
      }
    })
    .catch(e => {
      res.status(401).json({ message: 'invalid user/password' });
    });
});

module.exports = router;
