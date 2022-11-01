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
    
    
;
