const {
    Przesylka,
} = require('../models/przesylka');
const {
    Placowka,
} = require('../models/placowka');

async function getPrzesylki(okres) {
    let dataStartu
    const teraz = Date.now();
    switch(okres){
        case '15Minut':
            dataStartu = new Date(teraz - 1000 * 60 * 15)
            break;
        case 'Godzina':
            dataStartu = new Date(teraz - 1000 * 60 * 60)
            break;
        case 'Dzień':
            dataStartu = new Date(teraz - 1000 * 60 * 60 * 24)
            break;
        case 'Tydzień':
            dataStartu = new Date(teraz - 1000 * 60 * 60 * 24 * 7)
            break;
    }
    console.log(new Date(Date.now()).toLocaleDateString());
    console.log(dataStartu);
    try {
        const przesylki = await Przesylka.find({ dataOtrzymania: { $gte: dataStartu, $lte: teraz } })
        return przesylki;
    } catch (ex) {
        return przesylki;
    }
}
async function getPlacowki() {
    try {
        const placowki = await Placowka.find(function (err, placowki) {
            if (err) return console.error(err);
        })
        return placowki;
    } catch (ex) {
        return placowki;
    }
}

function wyliczRaport(placowki, przesylki){
    const raport = [];
    placowki.forEach(placowka => {
        const rPlacowka = {
            placowka: placowka.identyfikator,
            ilosc: 0,
            minimalnaWielkosc: Number.MAX_SAFE_INTEGER,
            sredniaWielkosc: 0,
            maksymalnaWielkosc: 0
        }
        przesylki.forEach(przesylka =>{
            if(przesylka.placowka == placowka.identyfikator){
                const wielkoscPrzesylki = przesylka.sprawy.length;
                rPlacowka.ilosc+= 1;
                if(wielkoscPrzesylki < rPlacowka.minimalnaWielkosc){
                    rPlacowka.minimalnaWielkosc = wielkoscPrzesylki;
                }
                rPlacowka.sredniaWielkosc+=wielkoscPrzesylki;
                if (wielkoscPrzesylki > rPlacowka.maksymalnaWielkosc) {
                    rPlacowka.maksymalnaWielkosc = wielkoscPrzesylki;
                }
            }
        })
            
        if (rPlacowka.ilosc > 0) {
            rPlacowka.sredniaWielkosc = rPlacowka.sredniaWielkosc / rPlacowka.ilosc;
            raport.push(rPlacowka);
        }
    });
    return raport;
}

module.exports = {

    getRaport: async function (req, res) {
        try {
            const przesylki = await getPrzesylki(req.query.okres)
            const placowki = await getPlacowki();
            
            const raport = wyliczRaport(placowki, przesylki);
            
            res.status(200).send(raport);
        } catch (ex) {
            return res.status(404).send(ex)
        }
    },
}
