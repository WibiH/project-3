'use strict';

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300
    },
    description: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 1000
    },
    createdUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    picture: {
      type: String
    },
    location: {
      type: String,
      required: true
    },
    dateTime: {
        type: Date,
        required: true
    }
  },
  {
    timestamps: true
  }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;


// - eventName: String, required
// - location: String, required (Wishlist: make into actual label in Google map)
// - Date: date, required
// - Time: time, optional (YYYY-MM-DDThh:mm:ss)
// - createdUser: ObjectId, ref: User, required
