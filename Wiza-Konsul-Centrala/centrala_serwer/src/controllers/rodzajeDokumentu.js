const {
    RodzajDokumentu
} = require('../models/rodzajDokumentu');

module.exports = {

    getAllRodzajeDokumentu: async function (req, res) {
        try {
            const rodzajDokumentu = await RodzajDokumentu.find(function (err, rodzajDokumentu) {
                if (err) return console.error(err);
            })
            res.status(200).send(rodzajDokumentu);
        } catch (ex) {
            return res.status(404).send(ex)
        }
    },
}