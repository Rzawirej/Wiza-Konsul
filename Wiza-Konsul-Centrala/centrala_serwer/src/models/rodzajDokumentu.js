const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const rodzajDokumentuSchema = new mongoose.Schema({
    rodzaj: {
        type: String,
        minlength: 1,
        required: true
    },
});
const RodzajDokumentu = mongoose.model('RodzajDokumentu', rodzajDokumentuSchema, 'RodzajeDokumentu');

function validateRodzajDokumentu(rodzajDokumentu) {
    const schema = {
        rodzaj: Joi.string().min(1).required(),
    }
    return Joi.validate(rodzajDokumentu, schema);
}

exports.rodzajDokumentuSchema = rodzajDokumentuSchema;
exports.validate = validateRodzajDokumentu;
exports.RodzajDokumentu = RodzajDokumentu;