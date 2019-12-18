const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const sprawaSchema = new mongoose.Schema({
    imie: {
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
});
const Sprawa = mongoose.model('Sprawa', sprawaSchema, 'Sprawy');
function validateSprawa(sprawa) {
    const schema = {
        imie: Joi.string().min(1).max(64).required(),
        nazwisko: Joi.string().min(1).max(64).required()
    }
    return Joi.validate(sprawa, schema);
}

exports.sprawaSchema = sprawaSchema;
exports.validate = validateSprawa;
exports.Sprawa = Sprawa;