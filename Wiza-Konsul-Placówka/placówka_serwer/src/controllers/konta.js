const {
    Konto,
    validate
} = require('../models/konto');

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

                if (konto == undefined) {
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

                let konto
                if (req.params.login == req.body.login) {
                    konto = [];
                } else {
                    konto = await Konto.find({
                        login: req.body.login
                    });
                }
                if (konto.length > 0) return res.status(408).send({
                    message: 'Login'
                });

                const newKonto = await Konto.findOneAndUpdate({
                    login: req.params.login
                }, {
                    $set: req.body
                }, {
                    new: true
                });
                res.status(200).send(newKonto);
            } catch (e) {
                console.log(e);
                return res.status(404).send(e);
            }
        },
}