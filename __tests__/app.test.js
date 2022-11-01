const request = require('supertest');
const app = require('../lib/app');
const { zodiac } = require('../lib/zodiac-data');

describe('zodiac route', () => {
  it('/ should return a list of all zodiacs', async () => {
    const resp = await request(app).get('/');
    const expected = zodiac.map((zodiacs) => {
      return { id: zodiacs.id, name: zodiacs.name, dates: zodiacs.dates, symbol: zodiacs.symbol };
    });
    expect(resp.body).toEqual(expected);
  });

  it('/zodiac:id should bring up details about that one sign', async () => {
    const resp = await request(app).get('/zodiac/1');
    const signOne = {

      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',

    };
    expect(resp.body).toEqual(signOne);
  });


  it('/horoscopes/:sign'), async () => {
    const resp = await request(app).get('/horoscopes/aquarius');
    const symbol = {
      symbol: 'Water Bearer'
    };
    expect(resp.body).toEqual(symbol);
  };


});
