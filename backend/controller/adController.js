const { Ad } = require('../db/models');

const getAd = async (req, res) => {
  const AdCarts = await Ad.findAll();
  res.send(AdCarts);
};

const getAdSingl = async (req, res) => {
  const { advertId } = req.params;
  console.log(advertId);
  const AdCart = await Ad.findOne({
    where: {
      id: advertId,
    },
  });
  res.send(AdCart);
};

module.exports = {
  getAd,
  getAdSingl,
};
