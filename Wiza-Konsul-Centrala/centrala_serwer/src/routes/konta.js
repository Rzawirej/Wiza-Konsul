const express = require('express');
const router = express.Router();
const kontaController = require('../controllers/konta');
const autho = require('../middleware/autho');

// Base route /api/konta

router
    .route('/')
    .post(kontaController.createKonto);

router
    .route('/')
    .get(kontaController.getAllKonta);

router
    .route('/:login')
    .delete(kontaController.deleteKonto);

router
    .route('/:login')
    .put(kontaController.editKonto);

router
    .route('/:login')
    .get(kontaController.getKonto);

module.exports = router;