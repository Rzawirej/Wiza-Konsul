const express = require('express');
const router = express.Router();
const rodzajeDokumentuController = require('../controllers/rodzajeDokumentu');

// Base route /api/rodzajeDokumentu
router
    .route('/')
    .get(rodzajeDokumentuController.getAllRodzajeDokumentu);


module.exports = router;