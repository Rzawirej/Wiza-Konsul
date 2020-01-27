const {
    Przesylka,
    validate
} = require('../models/przesylka');

async function test(res) {
    try {
        const przesylki = await Przesylka.find(function (err, przesylki) {
            if (err) return console.error(err);
        })
        return przesylki;
    } catch (ex) {
        return przesylki;
    }
}

module.exports = {

    getAllPrzesylki: async function (req, res) {
        try {
            const przesylki = await test(res)
            console.log(new Date(przesylki[0].dataOtrzymania - (1000 * 60 * 60 * 24)).toString())
            res.status(200).send(przesylki);
        } catch (ex) {
            return res.status(404).send(ex)
        }
    },
}
