const {
    Decyzja,
    validate
} = require('../models/decyzja');

module.exports = {

    createDecyzja: async function (req, res) {
        try {
            const {
                error
            } = validate(req.body);
            if (error) {
                
                return res.status(400).send(error.details[0].message);
            }
            const decyzja = new Decyzja(req.body);
            
            await decyzja.save(function (err, decyzja) {
                if (err) return console.error(err);
            });

            res.status(200).send(decyzja);
        } catch (e) {
            console.log(e);
            return res.status(404).send(e);
        }
    },
    getAllDecyzje: async function (req, res) {
        try {
            const decyzje = await Decyzja.find(function (err, decyzje) {
                if (err) return console.error(err);
            })
            res.status(200).send(decyzje);
        } catch (ex) {
            return res.status(404).send(ex)
        }
    },
}