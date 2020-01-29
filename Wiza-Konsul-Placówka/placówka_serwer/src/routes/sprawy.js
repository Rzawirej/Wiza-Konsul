const express = require('express');
const router = express.Router();
const sprawyController = require('../controllers/sprawy');

// Base route /api/sprawy
router
    .route('/')
    .get(sprawyController.getAllSprawy);

router
    .route('/')
    .post(sprawyController.createSprawa);

router
    .route('/:id')
    .get(sprawyController.getSprawaById)

router
  .route('/:id')
  .put(sprawyController.editSprawa)

module.exports = router;