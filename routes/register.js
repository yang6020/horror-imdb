const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('register');
});

router.post('/', (req, res, next) => {
  userController.createUser(req, res, (err, data) => {
    if (err) {
      res.status(401).json({ message: 'invalid user creation' });
    } else {
      res.status(200).json({ success: true, data });
    }
  });
});

module.exports = router;
