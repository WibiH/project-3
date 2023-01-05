'use strict';

const express = require('express');
const eventsRouter = express.Router();
const routeGuardMiddleware = require('../middleware/route-guard');
const Event = require('../models/event');
const User = require('../models/user');
const Attendence = require('./../models/attendence');
const upload = require('./upload');


// - GET /events/:Id -> Fetch single event
// - POST /events -> Create event
// - PATCH /events/:Id - Update a single event
// - DELETE /events/:Id - Deletes a single event
// - POST /events/:Id -> Create the attendance
// - DELETE /events/:Id -> Delete the attendance
// - GET /tour -> Display info for the tour

// - GET /events -> Fetch all events
eventsRouter.get('/', (req, res, next) => {
    Event.find()
    .then((events) => res.json({events}))
    .catch((error) => next(error));
})

eventsRouter.get('/:id', (req, res, next) => {
    const {id} = req.params;
    
})

module.exports = eventsRouter;
