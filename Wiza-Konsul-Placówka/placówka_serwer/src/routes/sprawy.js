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
    .route('/:taskId')
    .get(sprawyController.getSprawaById)

router
  .route('/:taskId')
  .put(sprawyController.editSprawa)

module.exports = router;