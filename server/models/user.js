'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  profilePicture: {
    type: String,
    default: 'pic',
    required: true
  },
  pronoun: {
    type: String,
    required: true,
    enum: ['he/him/his', 'she/her/hers', 'they/them/their', 'other']
  },
  status: {
    type: String,
    required: true,
    enum: ['user', 'admin']
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', schema);

module.exports = User;
