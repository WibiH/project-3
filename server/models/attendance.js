'use strict';

const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
  {
    attendingUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    attendingEvent: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Event'
    }
  },
  {
    timestamps: true
  }
);

const Attendance = mongoose.model('attendance', attendanceSchema);

module.exports = Attendance;
