'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('../middleware/routeGuard');

router.get('/', (req, res, next) => {
  res.json({ type: 'success', data: { title: 'Hello World' } });
});

// router.get('/private', routeGuard, (req, res, next) => {
//   res.json({});
// });

module.exports = router;
