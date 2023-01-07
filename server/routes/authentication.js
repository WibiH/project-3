'use strict';

const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../models/user');
const router = new Router();
const { routeGuard } = require('../middleware/routeGuard');
const encodeJwt = require('../lib/encode-jwt');
const saltRounds = 10;

router.post('/sign-up', (req, res, next) => {
  const { name, profilePicture, pronoun, status, email, password } = req.body;
  const salt = bcryptjs.genSaltSync(saltRounds);
  const hashedPassword = bcryptjs.hashSync(password, salt);
  return User.create({
    email,
    password: hashedPassword,
    name,
    profilePicture,
    pronoun,
    status
  })
    .then((createdUser) => {
      const { email, name, _id } = createdUser;
      const user = { email, name, _id };
      const authToken = encodeJwt(user);
      res.json({
        user: user,
        authToken
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHashAndSalt);
      }
    })
    .then((result) => {
      if (result) {
        req.session.userId = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

router.get('/verify', routeGuard, (req, res, next) => {
  const { _id, email, name } = req.payload;
  const user = { _id, email, name };
  const authToken = encodeJwt(user);
  res.json({ user, authToken });
});

router.get('/me', (req, res, next) => {
  res.json({ user: req.user });
});

module.exports = router;
