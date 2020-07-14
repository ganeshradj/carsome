const express = require('express');

const router = new express.Router();
const HealthCheckController = require('../controllers/health-check-controller');

router.get('/', HealthCheckController.healthCheck);

module.exports = router;
