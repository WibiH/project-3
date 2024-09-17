'use strict';
const express = require('express');
const routeGuard = require('./../middleware/routeGuard');
const profileRouter = express.Router();
// const Attendance = require('../models/attendance');
const User = require('../models/user');
const Event = require('../models/event');
const Attendance = require('../models/attendance');

// GET - Fetch events marked to attend by user
profileRouter.get('/', routeGuard, (req, res, next) => {
  console.log('This is the REQ.USER._ID', req.user._id);
  Attendance.find({ attendingUser: req.user._id })
    .populate('attendingEvent')
    .then((attendances) => {
      console.log('This is the ATTENDANCE', { attendances });

      res.json({ attendances });
    })
    .catch((error) => {
      console.log('This is the ERROR', error);
      next(error);
    });
});

// GET - /profile/:Id -> Fetch user
profileRouter.get('/:id', routeGuard, (req, res, next) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      res.json({ user });
    })
    .catch((error) => {
      console.log('This is the ERROR', error);
      next(error);
    });
});

module.exports = profileRouter;
