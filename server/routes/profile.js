// GET /profile -> Display user info and the events they are going to attend

'use strict';

const Event = require('../models/event');
const express = require('express');
const { routeGuard } = require('./../middleware/routeGuard');
const profileRouter = express.Router();

// GET - /events/:Id/going - List users attendences
profileRouter.get('/', routeGuard, (req, res, next) => {
  Event.find({ user: req.user._id })
    .populate('event')
    .then((attendences) => {
      console.log('attendences', { attendences });
      const newAttendence = attendences.map((element) => {
        element.event.attendence = true;
        return element;
      });
      res.json({ attendences });
    })
    .catch((error) => {
      next(error);
    });
});
