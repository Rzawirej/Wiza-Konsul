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
}