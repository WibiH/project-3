'use strict';

const mongoose = require('mongoose');
const Attendance = require('./attendance');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  profilePicture: {
    type: String,
    default: 'https://cdn-icons-png.flaticon.com/512/1251/1251840.png'
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
