const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const helper = require('../lib/helper');

class userController {
  static validateUser(req, res, cb) {
    const { body } = req;
    User.find({ user: body.user }, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        bcrypt.compare(body.password, data[0].password, (error, result) => {
          if (result) {
            jwt.sign({ user: data[0] }, 'tokensecret', (tokenError, token) => {
              if (err) {
                cb(new Error('could not make a token'));
              } else {
                User.updateOne({ user: body.user }, { token });
                cb(null, token);
              }
            });
          } else {
            cb(new Error('username password does not match'), data);
          }
        });
      }
    });
  }
  static createUser(req, res, cb) {
    const { body } = req;
    helper.generateSaltValue(req, (err, hash) => {
      if (err) {
        cb(err, null);
      }
      return User.create(
        {
          user: body.user,
          password: hash,
          telnum: body.telnum,
          email: body.email,
        },
        (error, data) => {
          if (error) {
            cb(error, null);
          } else {
            cb(null, data);
          }
        },
      );
    });
  }
}

module.exports = userController;
