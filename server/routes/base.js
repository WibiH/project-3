'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('../middleware/routeGuard');
const eventsRouter = express.Router();
const Event = require('../models/event');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
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
