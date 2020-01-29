const rewire = require('rewire');
const raporty = require('../src/controllers/raporty')
const raportyR = rewire('../src/controllers/raporty');
const wyliczRaport = raportyR.__get__('wyliczRaport');

test('wyliczRaport - pusty', () =>{
    const result = wyliczRaport([],[]);
    expect(result).toBe([]);
});