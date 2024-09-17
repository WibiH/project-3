'use strict';

const User = require('./../models/user');
const { expressjwt: jwt } = require('express-jwt');

function getTokenFromHeaders(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    const token = req.headers.authorization.split(' ')[1];
    console.log('TOKEN', token);
    return token;
  }
  return null;
}

module.exports = (req, res, next) => {
  const token = getTokenFromHeaders(req);
  console.log('token', token);
  if (token) {
    const middleBlob = token.split('.')[1];

    const payload = JSON.parse(atob(middleBlob));
    console.log(payload, typeof payload);
    const userId = payload._id;
    if (userId) {
      User.findById(userId)
        .then((user) => {
          req.user = user;
          res.locals.user = user;
          next();
        })
        .catch((error) => {
          next(error);
        });
    }
  } else {
    next();
  }
};
