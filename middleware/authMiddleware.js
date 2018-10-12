const jwt = require('jsonwebtoken');
const User = require('../models/Users');

module.exports = {
  validateToken(req, res, next) {
    const { body } = req;
    User.find({ user: body.user }, (err, user) => {
      if (err) {
        res.status(403).json({ message: 'unauthorised User' });
      } else {
        const { token } = user;
        if (token) {
          jwt.verify(token, 'tokensecret', (error, data) => {
            if (error) {
              res.status(403).json({ message: 'unauthorised User' });
            }
            req.user = data;
            next();
          });
        } else {
          res.status(403).json({ message: 'token is not provided in headers' });
        }
      }
    });
  },
};
