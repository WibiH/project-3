'use strict';


const mongoose = require('mongoose');

const attendenceSchema = new mongoose.Schema(
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

const Attendence = mongoose.model('Attendence', attendenceSchema);

module.exports = Attendence;