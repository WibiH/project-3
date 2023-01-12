'use strict';
const Attendance = require('../models/attendance');
const express = require('express');
const { routeGuard } = require('./../middleware/routeGuard');
const profileRouter = express.Router();

// GET - List users attendances
profileRouter.get('/', routeGuard, (req, res, next) => {
  Attendance.find({ attendingUser: req.user._id })
    .populate('Event')
    .then((attendances) => {
      console.log('attendances', { attendances });
      res.json({ attendances });
    })
    .catch((error) => {
      console.log('This is the ERROR', error);
      next(error);
    });
});
