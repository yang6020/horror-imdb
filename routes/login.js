const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
/* GET home page */
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  const { body } = req;
  console.log(body);
  const data = Users.findOne({ user: body.user, password: body.password });
  if (data) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ message: 'invalid user/password' });
  }
});

module.exports = router;
