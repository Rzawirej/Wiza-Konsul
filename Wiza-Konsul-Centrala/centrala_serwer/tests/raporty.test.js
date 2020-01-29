const rewire = require('rewire');
const raporty = require('../src/controllers/raporty')
const raportyR = rewire('../src/controllers/raporty');
const wyliczRaport = raportyR.__get__('wyliczRaport');

const placówki = [
    {
        identyfikator: "0"
    },
    {
        identyfikator: "1"
    },
    {
        identyfikator: "2"
    },
    {
        identyfikator: "3"
    },
    {
        identyfikator: "4"
    },
    {
        identyfikator: "5"
    }
];
const przesylki = [
    {
        identyfikator: "2.1",
        placowka: "1",
        sprawy: [ "1", "2", "3", "4"]
    },
]
test('wyliczRaport - pusty', () =>{
    let result = wyliczRaport([],[]);
    expect(result).toEqual([]);
    result = wyliczRaport(placówki, przesylki);
    expect(result).toEqual([{
        placowka: "1",
        ilosc: 1,
        minimalnaWielkosc: 4,
        sredniaWielkosc: 4,
        maksymalnaWielkosc: 4
    }]);
});