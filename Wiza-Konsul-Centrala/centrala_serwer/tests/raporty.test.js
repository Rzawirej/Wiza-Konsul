const rewire = require('rewire');
const raportyR = rewire('../src/controllers/raporty');
const wyliczRaport = raportyR.__get__('wyliczRaport');


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

let placówki = [
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
let przesylki = [
    {
        identyfikator: "2.1",
        placowka: "1",
        sprawy: ["1", "2", "3", "4"]
    },
]

test('wyliczRaport - jedna przesyłka', () => {
    result = wyliczRaport(placówki, przesylki);
    expect(result).toEqual([{
        placowka: "1",
        ilosc: 1,
        minimalnaWielkosc: 4,
        sredniaWielkosc: 4,
        maksymalnaWielkosc: 4
    }]);
});



test('wyliczRaport - przesyłka dla nieistniejącej placówki', () => {
    przesylki = [
        {
            identyfikator: "2.1",
            placowka: "6",
            sprawy: ["1", "2", "3", "4"]
        },
    ]
    result = wyliczRaport(placówki, przesylki);
    expect(result).toEqual([]);
});



test('wyliczRaport - przesyłki dla jednej placówki', () => {
    przesylki = [
        {
            identyfikator: "2.1",
            placowka: "1",
            sprawy: ["1", "2", "3", "4"]
        },
        {
            identyfikator: "2.2",
            placowka: "1",
            sprawy: ["1", "2", "3", "4", "5", "6", "7", "8"]
        },
        {
            identyfikator: "2.3",
            placowka: "1",
            sprawy: ["1"]
        },
    ]
    result = wyliczRaport(placówki, przesylki);
    expect(result[0]).toMatchObject({
        placowka: "1",
        ilosc: 3,
        minimalnaWielkosc: 1,
        maksymalnaWielkosc: 8
    });
    expect(result[0].sredniaWielkosc).toBeCloseTo(4.33333);
});

test('wyliczRaport - puste przesyłki', () => {
    przesylki = [
        {
            identyfikator: "2.1",
            placowka: "1",
            sprawy: []
        },
        {
            identyfikator: "2.2",
            placowka: "1",
            sprawy: []
        },
        {
            identyfikator: "2.3",
            placowka: "1",
            sprawy: []
        },
    ]
    result = wyliczRaport(placówki, przesylki);
    expect(result[0]).toMatchObject({
        placowka: "1",
        ilosc: 3,
        minimalnaWielkosc: 0,
        maksymalnaWielkosc: 0
    });
    expect(result[0].sredniaWielkosc).toBeCloseTo(0);
});

test('wyliczRaport - przesyłki dla różnych placówek', () => {
    przesylki = [
        {
            identyfikator: "2.1",
            placowka: "1",
            sprawy: ["1", "2", "3", "4", "5", "6", "7"]
        },
        {
            identyfikator: "2.2",
            placowka: "2",
            sprawy: ["1", "2", "3", "4", "5", "6"]
        },
        {
            identyfikator: "2.3",
            placowka: "3",
            sprawy: ["1", "2", "3", "4", "5", "6", "7", "8"]
        },
    ]
    result = wyliczRaport(placówki, przesylki);
    expect(result[0]).toMatchObject({
        placowka: "1",
        ilosc: 1,
        minimalnaWielkosc: 7,
        maksymalnaWielkosc: 7
    });
    expect(result[0].sredniaWielkosc).toBeCloseTo(7);
    expect(result[1]).toMatchObject({
        placowka: "2",
        ilosc: 1,
        minimalnaWielkosc: 6,
        maksymalnaWielkosc: 6
    });
    expect(result[1].sredniaWielkosc).toBeCloseTo(6);
    expect(result[2]).toMatchObject({
        placowka: "3",
        ilosc: 1,
        minimalnaWielkosc: 8,
        maksymalnaWielkosc: 8
    });
    expect(result[2].sredniaWielkosc).toBeCloseTo(8);
});