const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const przesylkaSchema = new mongoose.Schema({
    identyfikator: {
        type: String,
        required: true
    },
    dataOtrzymania: {
        type: Date,
        required: true,
        default: Date.now
    },
    placowka: {
        type: String,
        required: true
    },
    sprawy: {
        type: [String],
        required: false
    },
    
});
const Przesylka = mongoose.model('Przesylka', przesylkaSchema, 'Przesyłki');
function validatePrzesylka(przesylka) {
    const schema = {
        identyfikator: Joi.string().required(),
        placowka: Joi.string().required(),
        sprawy: Joi.array().items(Joi.objectId())
    }
    return Joi.validate(przesylka, schema);
}

exports.przesylkaSchema = przesylkaSchema;
exports.validate = validatePrzesylka;
exports.Przesylka = Przesylka;