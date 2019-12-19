const {
    Sprawa,
    validate
} = require('../models/sprawa');

module.exports = {

    getSprawaById: async function (req, res) {
        try {
            const sprawa = await Task.findById(req.params.sprawaId);
            res.send(sprawa);
        } catch (error) {
            console.log(error);
            res.status(500).send('Error occurred');
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
}