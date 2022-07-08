const { Ad } = require('../db/models');

const getAd = async (req, res) => {
  const AdCarts = await Ad.findAll();
  res.send(AdCarts);
};

module.exports = {
  getAd,
};
