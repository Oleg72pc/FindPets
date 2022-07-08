const authRouter = require('express').Router();
const { getAd } = require('../controller/adController');

authRouter.get('/', getAd);

module.exports = authRouter;
