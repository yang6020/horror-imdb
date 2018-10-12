const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
/* GET home page */
router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res, next) => {
  userController.validateUser(req, res, (err, token) => {
    if (err) {
      res.status(401).json({ message: 'invalid user/password' });
    } else {
      res.status(200).json({ success: true, token });
    }
  });
});

module.exports = router;
