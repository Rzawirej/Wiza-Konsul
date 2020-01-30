const express = require('express');
const router = express.Router();
const decyzjeController = require('../controllers/decyzje');

// Base route /api/decyzje

router
    .route('/')
    .post(decyzjeController.createDecyzja);

router
    .route('/')
    .get(decyzjeController.getAllDecyzje);

module.exports = router;