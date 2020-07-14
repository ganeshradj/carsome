const express = require('express');

const router = new express.Router();
const SlotController = require('../controllers/slot-controller');

router.post('/get', SlotController.GetAvailableSlot);
router.post('/book', SlotController.BookSlot);

module.exports = router;
