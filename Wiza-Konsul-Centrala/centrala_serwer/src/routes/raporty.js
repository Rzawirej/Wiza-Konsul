const express = require('express');
const router = express.Router();
const raportyController = require('../controllers/raporty');
const autho = require('../middleware/autho');

// Base route /api/raporty
router
    .route('/')
    .get(raportyController.getRaport);

module.exports = router;