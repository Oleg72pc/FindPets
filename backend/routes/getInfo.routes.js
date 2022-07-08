const infoRouter = require('express').Router();
const { infoController } = require('../controller/infoController');

infoRouter.get('/', infoController);

module.exports = infoRouter;
