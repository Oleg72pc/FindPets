const adRouter = require('express').Router();
const { getAd, getAdSingl, postAdComment } = require('../controller/adController');

adRouter.get('/', getAd);
adRouter.get('/:advertId', getAdSingl);
adRouter.post('/comment', postAdComment);

module.exports = adRouter;
