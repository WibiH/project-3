'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  profilePicture: {
    type: String,
    default: 'pic', 
    required: true,
  },
  pronoun: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['user', 'admin']
  },
  passwordHashAndSalt: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', schema);

module.exports = User;
