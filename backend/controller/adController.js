const { Ad, Comment } = require('../db/models');

const getAd = async (req, res) => {
  const AdCarts = await Ad.findAll();
  res.send(AdCarts);
};

const getAdSingl = async (req, res) => {
  const { advertId } = req.params;
  const AdCart = await Ad.findOne({
    where: {
      id: advertId,
    },
  });
  res.send(AdCart);
};

const postAdComment = async (req, res) => {
  const { text, userId, adId } = req.body;
  const comment = await Comment.create({
    text,
    userId,
    adId,
  });
  res.status(200).send(comment);
};

module.exports = {
  getAd,
  getAdSingl,
  postAdComment,
};
