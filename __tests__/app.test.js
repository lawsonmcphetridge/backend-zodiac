const request = require('supertest');
const app = require('../lib/app');
const { zodiac } = require('../lib/zodiac-data');

describe('zodiac route', () => {
  it('/ should return a list of all zodiacs', async () => {
    const resp = await request(app).get('/zodiac');
    const expected = zodiac.map((zodiacs) => {
      return { id: zodiacs.id, name: zodiacs.name, dates: zodiacs.dates, symbol: zodiacs.symbol, horoscope: zodiacs.horoscope };
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
      horoscope: 'Will you go out with me? Be careful if a person says yes when you ask that question today, Aquarius. You could take the nature of this situation to the extreme. Saying yes doesnt mean youre suddenly in charge of his or her life. Nor are you responsible for anything that person does or how they feel. If youre still asking the question without getting any positive responses, dont worry. Keep trying.'

    };
    expect(resp.body).toEqual(signOne);
  });


  it('/zodiac/horoscope/:sign', async () => {
    const resp = await request(app).get('/zodiac/horoscope/cancer');
    const symbol =
      'There is irony in todays situation, Cancer.The only real remedy for situations like this is to accept them and joke about it.If you try to take yourself too seriously, especially when it comes to art or romance, you will inevitably fail.Your heart is sensual and your emotions profound.Bring yourself into balance by laughing instead of crying about the events of the day.'
    ;
    expect(resp.body).toEqual(symbol);
  });


});
