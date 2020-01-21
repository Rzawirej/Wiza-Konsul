const express = require('express');
const router = express.Router();
const sprawyController = require('../controllers/sprawy');
const autho = require('../middleware/autho');

// Base route /api/sprawy
router
    .route('/')
  //  .get(autho)
    .get(sprawyController.getAllSprawy);

router
    .route('/')
  //  .post(autho)
    .post(sprawyController.createSprawa);

router
    .route('/:taskId')
  //  .get(autho)
    .get(sprawyController.getSprawaById)

module.exports = router;