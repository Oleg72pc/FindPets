const adRouter = require('express').Router();

const {
  getAd,
  postPhoto,
  addAdvent,
  getAdSingl,
  postAdComment,
  postDeleteComment,
  postDeleteAd,
} = require('../controller/adController');

adRouter.get('/', getAd);
adRouter.post('/add', addAdvent);
adRouter.post('/', postPhoto);
adRouter.get('/:advertId', getAdSingl);
adRouter.post('/comment', postAdComment);
adRouter.delete('/comment/:id', postDeleteComment);
adRouter.delete('/delete/:id', postDeleteAd);

module.exports = adRouter;
