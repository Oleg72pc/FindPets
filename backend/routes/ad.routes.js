const adRouter = require('express').Router();
const { getAd, postPhoto, addAdvent } = require('../controller/adController');

adRouter.get('/', getAd);
adRouter.post('/add', addAdvent);
adRouter.post('/', postPhoto);

module.exports = adRouter;
