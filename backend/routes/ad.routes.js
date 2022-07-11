const authRouter = require('express').Router();
const { getAd, getAdSingl } = require('../controller/adController');

authRouter.get('/', getAd);
authRouter.get('/:advertId', getAdSingl);

module.exports = authRouter;
