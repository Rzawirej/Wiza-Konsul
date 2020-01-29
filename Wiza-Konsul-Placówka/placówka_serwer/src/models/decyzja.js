const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const decyzjaSchema = new mongoose.Schema({
    rodzaj: {
        type: String,
        minlength: 1,
        required: true
    },
    data: {
        type: Date,
        required: true,
        default: Date.now
    },
    uzasadnienie:{
        type: String,
        minlength: 1,
        required: true
    },
    
    kierownik: {
        type: String,
        minlength: 1,
        required: true
    },
    identyfikator:{
        type:String,
        minlength:1,
        required:true
    },

});
const Decyzja = mongoose.model('Decyzja', decyzjaSchema, 'Decyzje');

function validateDecyzja(decyzja) {
    const schema = {
        rodzaj: Joi.string().min(1).required(),
       
        uzasadnienie: Joi.string().min(1).required(),
        kierownik: Joi.string().min(1).required(),
        identyfikator:Joi.string().min(1).required(),
    }
    return Joi.validate(decyzja, schema);
}

exports.decyzjaSchema = decyzjaSchema;
exports.validate = validateDecyzja;
exports.Decyzja = Decyzja;