const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const kontoSchema = new mongoose.Schema({
    imiona: {
        type: String,
        minlength: 1,
        maxlength: 64,
        required: true
    },
    nazwisko: {
        type: String,
        minlength: 1,
        maxlength: 64,
        required: true
    },
    pesel: {
        type: String,
        minlength: 11,
        maxlength: 11,
        required: true
    },
    login: {
        type: String,
        minlength: 6,
        maxlength: 32,
        required: true
    },
    haslo: {
        type: String,
        minlength: 8,
        maxlength: 32,
        required: true
    },
    placowka: {
        type: String,
        minlength: 1,
        maxlength: 10,
        required: true
    }
});
const Konto = mongoose.model('Konto', kontoSchema, 'Konta');

function validateKonto(konto) {
    const schema = {
        imiona: Joi.string().min(1).max(64).required(),
        nazwisko: Joi.string().min(1).max(64).required(),
        pesel: Joi.string().min(11).max(11).required(),
        login: Joi.string().min(6).max(32).required(),
        haslo: Joi.string().min(8).max(32).required(),
        placowka: Joi.string().min(1).max(10).required()
    }
    return Joi.validate(konto, schema);
}

exports.kontoSchema = kontoSchema;
exports.validate = validateKonto;
exports.Konto = Konto;