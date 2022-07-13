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
    console.log('not user');
    res.send({ user: null });
  }
}

async function createUser(req, res) {
  const { userName, password, phoneNumber } = req.body;
  try {
    const user = await User.create({
      userName,
      password: await bcrypt.hash(password, 10),
      isAdmin: false,
      phoneNumber,
    });
    req.session.user = user;
    res.send(user);
  } catch (err) {
    res.send(err.message);
  }
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
    // кладём id нового пользователя в хранилище сессии (логиним пользователя)
    req.session.user = user;
    res.json(user);
  } else {
    res.json('Неправильный телефон или пароль');
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
