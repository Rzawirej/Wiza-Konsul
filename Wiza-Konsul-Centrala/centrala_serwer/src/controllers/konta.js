const {
    Konto,
    validate
} = require('../models/konto');
const {
    Placowka,
} = require('../models/placowka');
const axios = require('axios');

module.exports = {

    createKonto: async function (req, res) {
        try {
            const {
                error
            } = validate(req.body);
            if (error) return res.status(400).send(error.details[0].message);
            
            const placowka = await Placowka.find({
                identyfikator: req.body.placowka
            });
            
            let konto = await Konto.find({
                login: req.body.login
            });
            if (konto.length > 0 && placowka.length == 0) return res.status(409).send({ message: 'Login i Placowka' });
            if (placowka.length == 0) return res.status(407).send({message :"Placowka"});
            if (konto.length > 0) return res.status(408).send({ message: 'Login' });
            
            
            konto = new Konto(req.body);
            await konto.save(function (err, konto) {
                if (err) return console.error(err);
            });
            axios.defaults.baseURL = 'http://localhost:5001/api';
            try {
                await axios.post('/konta', req.body);
            } catch (e) {
                 console.log(JSON.parse(JSON.stringify(e)));
            }

            res.status(200).send(konto);
        } catch (e) {
            console.log(e);
            return res.status(404).send(e);
        }
    },
    getAllKonta: async function (req, res) {
        try {
            const konta = await Konto.find(function (err, konto) {
                if (err) return console.error(err);
            })
            res.status(200).send(konta);
        } catch (ex) {
            return res.status(404).send(ex)
        }
    },
    deleteKonto: async function (req, res) {
        try {
            const konto = await Konto.findOneAndDelete({
                login: req.params.login
            });
            
            if(konto == undefined){
                return res.status(404).send('Nie ma takiego konta');
            }
            res.send(konto);
        } catch (e) {
            res.status(500).send('Error occurred');
            console.log(e);
        }
    },
    editKonto: async function (req, res) {
        try {
            const {
                error
            } = validate(req.body);
            if (error) return res.status(400).send(error.details[0].message);

            const newKonto = await Konto.findOneAndUpdate(
                {login: req.params.login}, {
                    $set: req.body
                }, {
                    new: true
                }
            );
            res.status(200).send(newKonto);
        } catch (e) {
            console.log(e);
            return res.status(404).send(e);
        }
    }
}