const adRouter = require('express').Router();

const {
  getAd,
  postPhoto,
  addAdvent,
  getAdSingl,
  postAdComment,
} = require('../controller/adController');

adRouter.get('/', getAd);
adRouter.post('/add', addAdvent);
adRouter.post('/', postPhoto);
adRouter.get('/:advertId', getAdSingl);
adRouter.post('/comment', postAdComment);

module.exports = adRouter;
