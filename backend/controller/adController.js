const {
  Ad,
  User,
} = require('../db/models');
const storageFileupload = require('../storageFileupload');

const getAd = async (req, res) => {
  const AdCarts = await Ad.findAll();
  res.send(AdCarts);
};

const postPhoto = async (req, res) => {
  try {
    const file = req.files.homesImg;

    const arrUrl = await storageFileupload(file);

    res.json(arrUrl);
  } catch {
    console.error;
  }
};

const addAdvent = async (req, res) => {
  try {
    const {
      title,
      description,
      genderAnimal,
      location,
      lossTime,
      spenTime,
      password,
      phone,
      nameUser,
      cityId,
      colorId,
      typeId,
      photo,
    } = req.body;
    let newAdvent = {};
    if (title === 'missing') {
      const newUser = await User.create({
        userName: nameUser,
        phoneNumber: phone,
        password,
        isAdmin: false,
      });
      newAdvent = await Ad.create({
        title,
        description,
        genderAnimal,
        location,
        lossTime,
        spenTime,
        userId: newUser.id,
        cityId,
        colorId,
        typeId,
        photo,
      });
    } else {
      newAdvent = await Ad.create({
        title,
        description,
        genderAnimal,
        location,
        lossTime,
        spenTime,
        userId: null,
        cityId,
        colorId,
        typeId,
        photo,
      });
    }
    res.send(newAdvent);
  } catch (err) {
    console.log(err.message);
    res.status(500).end();
  }
};

module.exports = {
  getAd,
  postPhoto,
  addAdvent,
};
