'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('../middleware/routeGuard');
const eventsRouter = express.Router();
const Event = require('../models/event');

var ImageKit = require('imagekit');

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL
});

router.get('/imagekit-authentication', (req, res, next) => {
  var authenticationParameters = imagekit.getAuthenticationParameters();
  res.json(authenticationParameters);
});

// const upload = require('./upload');

// - GET /events -> Fetch all events
eventsRouter.get('/home', (req, res, next) => {
  Event.find()
    .populate('createdUser')
    .then((events) => res.json({ events }))
    .catch((error) => next(error));
});

module.exports = router;
