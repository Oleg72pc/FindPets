const bcrypt = require('bcrypt');
const { Ad, User, Comment } = require('../db/models');
const storageFileupload = require('../storageFileupload');

const getAd = async (req, res) => {
  const AdCarts = await Ad.findAll({
    include: [Ad.User],
  });
  res.send(AdCarts);
};

const postPhoto = async (req, res) => {
  try {
    const file = req.files.homesImg;

    const arrUrl = await storageFileupload(file);

    res.json(arrUrl);
  } catch {
    console.error('err');
  }
};

const addAdvent = async (req, res) => {
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
  if (title === 'Потерялся') {
    const existingUser = await User.findOne({ where: { phoneNumber: phone } });
    if (existingUser) {
      res.json('* Пользователь с таким телефоном уже есть *');
      return;
    }
    if (!phone.match(/^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/)) {
      res.json('* Неверный формат телефона *');
      return;
    }
    if (!password.match(/(?=.*[0-9])(?=.*[a-z])[0-9a-z]{6,}/)) {
      res.json('* Пароль должен быть от 6 символов (Латинские строчные и минимум одна цифра) *');
      return;
    }
    if (nameUser.length < 3) {
      res.json('* Логин должен быть минимум 3 символа *');
      return;
    }
    if (description.length <= 0) {
      res.json('* Заполните описание *');
      return;
    }
    if (!genderAnimal) {
      res.json('* Укажите пол животного*');
      return;
    }
    if (!typeId) {
      res.json('* Укажите тип животного *');
      return;
    }
    if (!colorId) {
      res.json('* Укажите цвет животного *');
      return;
    }
    const newUser = await User.create({
      userName: nameUser,
      phoneNumber: phone,
      password: await bcrypt.hash(password, 10),
      isAdmin: false,
    });
    const user = {
      id: newUser.id,
      userName: newUser.userName,
      isAdmin: newUser.isAdmin,
      phoneNumber: newUser.phoneNumber,
    };
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
    req.session.user = user;
    res.json(user);
  } else {
    if (description.length <= 0) {
      res.json('* Заполните описание *');
      return;
    }
    if (!typeId) {
      res.json('* Укажите тип животного *');
      return;
    }
    if (!colorId) {
      res.json('* Укажите цвет животного *');
      return;
    }
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
    res.send(newAdvent);
    // res.status(500).end();
  }
};

const getAdSingl = async (req, res) => {
  const { advertId } = req.params;
  const coments = await Comment.findAll({
    where: {
      adId: advertId,
    },
  });
  res.send(coments);
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

const postDeleteAd = async (req, res) => {
  const { id } = req.params;

  await Ad.destroy({ where: { id } });
  return res.status(200).send(true);
};

const postDeleteComment = async (req, res) => {
  const { id } = req.params;

  await Comment.destroy({ where: { id } });
  res.status(200).send(true);
};

const getComments = async (req, res) => {
  const comments = await Comment.findAll();
  res.send(comments);
};

module.exports = {
  getAd,
  postPhoto,
  addAdvent,
  getAdSingl,
  postAdComment,
  getComments,
  postDeleteComment,
  postDeleteAd,
};
