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
  const middleBlob = token.split('.')[1];

  const payload = JSON.parse(atob(middleBlob));
  console.log(payload, typeof payload);
  const userId = payload._id;
  if (userId) {
    User.findById(userId)
      .then((user) => {
        req.user = user;
        //res.locals.user = user;
        next();
      })
      .catch((error) => {
        next(error);
      });
  } else {
    next();
  }
};

/*'use strict';

const User = require('./../models/user');

module.exports = (req, res, next) => {
  const userId = req.session.userId;
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
  } else {
    next();
  }
};

*/
