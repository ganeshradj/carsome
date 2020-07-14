const express = require('express');

const router = new express.Router();
const PingController = require('../controllers/ping-controller');

router.get('/', PingController.ping);

module.exports = router;
