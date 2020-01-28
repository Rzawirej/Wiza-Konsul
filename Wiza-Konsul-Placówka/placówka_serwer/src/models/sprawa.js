const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const sprawaSchema = new mongoose.Schema({
    imiona: {
        type: String,
        minlength: 1,
        required: true
    },
    nazwisko: {
        type: String,
        minlength: 1,
        required: true
    },
    płeć: {
        type: String,
        minlength: 1,
        maxlength: 1,
        required: true
    },
    krajowyNumerIdentyfikacyjny: {
        type: String,
        minlength: 1,
        maxlength: 64,
        required: false
    },
    numerDokumentuIdentyfikującego: {
        type: String,
        minlength: 1,
        maxlength: 64,
        required: true
    },
    zdjęcie: {
        type: String,
        minlength: 1,
        required: true
    },
    treść: {
        type: String,
        minlength: 1,
        required: true
    },
    identyfikator: {
        type: String,
        minlength: 1,
        maxlength: 64,
        required: true
    },
    opłata: {
        type: Number,
        required: true
    },
    wysłana: {
        type: Boolean,
        default: false,
        required: true
    },
    usunięta: {
        type: Boolean,
        default: false,
        required: true
    },
    krajPochodzenia: {
        type: String,
        minlength: 1,
        maxlength: 64,
    },
    obywatelstwo: {
        type: String,
        minlength: 1,
        maxlength: 64,
    },
    celWydania: {
        type: String,
        minlength: 1,
        maxlength: 64,
    },
    rodzajWizy: {
        type: String,
        minlength: 1,
        maxlength: 1,
    },
    rodzaj: {
        type: String,
        minlength: 1,
        maxlength: 64,
        required: true
    },
});
const Sprawa = mongoose.model('Sprawa', sprawaSchema, 'Sprawy');
function validateSprawa(sprawa) {
    const schema = {
        imiona: Joi.string().min(1).required(),
        nazwisko: Joi.string().min(1).required(),
        płeć: Joi.string().min(1).max(1).required(),
        krajowyNumerIdentyfikacyjny: Joi.string().min(1).max(64),
        numerDokumentuIdentyfikującego: Joi.string().min(1).max(64).required(),
        zdjęcie: Joi.string().min(1).required(),
        treść: Joi.string().min(1).required(),
        identyfikator: Joi.string().min(1).max(64).required(),
        opłata: Joi.number().required(),
        wysłana: Joi.boolean().required(),
        usunięta: Joi.boolean().required(),
        krajPochodzenia: Joi.string().min(1).max(64),
        obywatelstwo: Joi.string().min(1).max(64),
        celWydania: Joi.string().min(1).max(64),
        rodzajWizy: Joi.string().min(1).max(1),
        rodzaj: Joi.string().min(1).max(64).required()

    }
    return Joi.validate(sprawa, schema);
}

exports.sprawaSchema = sprawaSchema;
exports.validate = validateSprawa;
exports.Sprawa = Sprawa;