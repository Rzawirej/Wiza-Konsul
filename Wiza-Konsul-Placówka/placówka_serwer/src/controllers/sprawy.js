const {
    Sprawa,
    validate
} = require('../models/sprawa');

module.exports = {

    getSprawaById: async function (req, res) {
       try {
            const sprawa = await Sprawa.findOne({
                identyfikator: req.params.id
            });
            res.status(200).send(sprawa);
        } catch (ex) {
            return res.status(404).send(ex)
        }
    },

    getAllSprawy: async function (req, res) {
        try {
            const sprawy = await Sprawa.find(function (err, sprawa) {
                if (err) return console.error(err);
            })
            res.status(200).send(sprawy);
        } catch (ex) {
            return res.status(404).send(ex)
        }
    },

    createSprawa: async function (req, res) {
        try {
            req.body.wysłana = false;
            req.body.usunięta = false;
            const {
                error
            } = validate(req.body);
            
            if (error) return res.status(400).send(error.details[0].message);

            const sprawa = new Sprawa(req.body);

            await sprawa.save(function (err, sprawa) {
                if (err) return console.error(err);
            });

            res.status(200).send(sprawa);
        } catch (e) {
            console.log(e);
            return res.status(404).send(e);
        }
    },
    editSprawa: async function (req, res) {
        try {
            const {
                error
            } = validate(req.body);
            if (error) return res.status(400).send(error.details[0].message);


            const sprawa = await Sprawa.findOneAndUpdate({
                identyfikator: req.params.id
            }, {
                $set: req.body
            }, {
                new: true
            });
            res.status(200).send(sprawa);
        } catch (e) {
            console.log(e);
            return res.status(404).send(e);
        }
    },
}