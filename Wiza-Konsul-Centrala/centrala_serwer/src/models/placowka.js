const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const placowkaSchema = new mongoose.Schema({
    identyfikator: {
        type: String,
        required: true
    },
    adresSerwera: {
        type: String,
        required: true
    },
});
const Placowka = mongoose.model('Placowka', placowkaSchema, 'Placówki');
function validatePlacowka(placowka) {
    const schema = {
        imie: Joi.string().required(),
        nazwisko: Joi.string().required()
    }
    return Joi.validate(placowka, schema);
}

exports.placowkaSchema = placowkaSchema;
exports.validate = validatePlacowka;
exports.Placowka = Placowka;