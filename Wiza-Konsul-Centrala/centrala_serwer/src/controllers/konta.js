const {
    Konto,
    validate
} = require('../models/konto');
const axios = require('axios');

module.exports = {

    createKonto: async function (req, res) {
        try {
            const {
                error
            } = validate(req.body);

            if (error) return res.status(400).send(error.details[0].message);

            const konto = new Konto(req.body);

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
            const konto = await Konto.find(function (err, konto) {
                if (err) return console.error(err);
            })
            await konto.delete(function (err, konto) {
                if (err) return console.error(err);
            });
            res.status(200).send(konta);
        } catch (ex) {
            return res.status(404).send(ex)
        }
    },
}