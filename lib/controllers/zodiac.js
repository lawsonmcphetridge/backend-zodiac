const { Router } = require('express');
const { zodiac } = require('../zodiac-data');
module.exports = Router()
    
  .get('/', (req, res) => {
    const signs = [];
    zodiac.map((sign) => {
      signs.push(sign);
    });
    res.json(signs);
  })
    
    
  .get('/:id', (req, res) => {
    const id = zodiac.find((sign) => sign.id === req.params.id);
    res.json(id);
  })
    
  .get('/horoscope/:name', (req, res) => { 
    const name = zodiac.find((sign) => sign.name === req.params.name);
    
    res.json(name.horoscope);
  })

    
    
;
