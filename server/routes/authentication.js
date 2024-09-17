'use strict';

const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../models/user');
const router = new Router();
const routeGuard = require('../middleware/routeGuard');
const encodeJwt = require('../lib/encode-jwt');
const saltRounds = 10;

router.post('/signup', (req, res, next) => {
  const { name, profilePicture, pronoun, status, email, password } = req.body;
  const salt = bcryptjs.genSaltSync(saltRounds);
  const hashedPassword = bcryptjs.hashSync(password, salt);
  console.log('This is the req.body', req.body);
  return User.create({
    name,
    profilePicture,
    pronoun,
    status,
    email,
    password: hashedPassword
  })
    .then((createdUser) => {
      console.log('This is the createdUser', createdUser);
      const { email, name, _id, profilePicture } = createdUser;
      const user = { email, name, _id, profilePicture };
      const authToken = encodeJwt(user);
      res.json({
        user: user,
        authToken
      });
    })
    .catch((error) => {
      console.log('This is the error', error);
      next(error);
    });
});

router.post('/login', (req, res, next) => {
  let userDocument;
  const { email, password } = req.body;
  console.log('This is the REQ.BODY', req.body);
  User.findOne({ email })
    .then((foundUserDocument) => {
      if (!foundUserDocument) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        userDocument = foundUserDocument;
        return bcryptjs.compare(password, userDocument.password);
      }
    })
    .then((result) => {
      console.log('This is the RESULT', result);
      if (result) {
        req.session.userId = userDocument._id;
        const { _id, name, email } = userDocument;
        const user = { _id, name, email };
        const authToken = encodeJwt(user);
        res.json({ user, authToken });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      console.log('This is the ERROR', error);
      next(error);
    });
});

router.post('/logout', routeGuard, (req, res, next) => {
  req.session.destroy();
  res.json({});
});

router.get('/verify', routeGuard, (req, res, next) => {
  console.log(req.payload);
  const { _id, email, name } = req.payload;
  const user = { _id, email, name };
  const authToken = encodeJwt(user);
  res.json({ user, authToken });
});

module.exports = router;
