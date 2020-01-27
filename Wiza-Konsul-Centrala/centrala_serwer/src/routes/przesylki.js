const express = require('express');
const router = express.Router();
const przesylkiController = require('../controllers/przesylki');
const autho = require('../middleware/autho');

// Base route /api/przesylki
router
    .route('/')
    .get(przesylkiController.getAllPrzesylki);

module.exports = router;