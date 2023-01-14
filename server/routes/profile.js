'use strict';
const express = require('express');
const routeGuard = require('./../middleware/routeGuard');
const profileRouter = express.Router();
const Attendance = require('../models/attendance');

// GET - User info and the events they marked to attend
profileRouter.get('/', routeGuard, (req, res, next) => {
  console.log('USER OBJECT', req.user._id);
  Attendance.find({ attendingUser: req.user._id })
    .populate('attendingEvent')
    .then((attendances) => {
      console.log('attendance', { attendances });
      res.json({ attendances });
    })
    .catch((error) => {
      console.log('This is the ERROR', error);
      next(error);
    });
});

module.exports = profileRouter;
