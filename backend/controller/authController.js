const bcrypt = require('bcrypt');
const { User } = require('../db/models');

async function sessionUser(req, res) {
  const { user } = req.session;
  if (user) {
    res.send({
      user: {
        userName: user.userName,
        phoneNumber: user.phoneNumber,
        isAdmin: user.isAdmin,
      },
    });
  } else {
    res.send({ user: null });
  }
}

async function createUser(req, res) {
  const { userName, password, phoneNumber } = req.body;
  const existingUser = await User.findOne({ where: { phoneNumber } });
  // проверяем есть ли уже такой пользователь в БД
  if (existingUser) {
    res.json('* Пользователь с таким телефоном уже есть *');
    return;
  }
  if (!phoneNumber.match(/^((8|\+7)[ \- ]?)?(\(?\d{3}\)?[ \- ]?)?[\d\- ]{7,10}$/)) {
    res.json('* Неверный формат телефона *');
    return;
  }
  if (!password.match(/(?=.*[0-9])(?=.*[a-z])[0-9a-z]{6,}/)) {
    res.json('* Пароль должен быть от 6 символов ((Латинские буквы и минимум одна цифра)) *');
    return;
  }
  if (userName.length < 3) {
    res.json('* Логин должен быть минимум 3 символа *');
    return;
  }

  const user = await User.create({
    userName,
    password: await bcrypt.hash(password, 10),
    isAdmin: false,
    phoneNumber,
  });
  const newUser = {
    id: user.id,
    userName: user.userName,
    isAdmin: user.isAdmin,
    phoneNumber: user.phoneNumber,
  };
  req.session.user = newUser;
  res.json(newUser);
}

async function loginUser(req, res) {
  const { phoneNumber, password } = req.body;
  const existingUser = await User.findOne({ where: { phoneNumber } });
  // проверяем, что такой пользователь есть в БД и пароли совпадают
  if (existingUser && await bcrypt.compare(password, existingUser.password)) {
    const user = {
      id: existingUser.id,
      userName: existingUser.userName,
      phoneNumber: existingUser.phoneNumber,
      isAdmin: existingUser.isAdmin,
    };
    req.session.user = user;
    res.json(user);
  } else {
    res.json('* Неверный телефон или пароль *');
  }
}

async function logoutUser(req, res) {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.send({ success: true });
}
module.exports = {
  createUser,
  loginUser,
  logoutUser,
  sessionUser,
};
