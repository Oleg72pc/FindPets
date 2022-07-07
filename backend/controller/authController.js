const bcrypt = require('bcrypt');
const { User } = require('../db/models');

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
  let user;
  try {
    user = await User.findOne({
      where: {
        phoneNumber,
      },
    });
  } catch (err) {
    res.send(err.message);
  }
  if (!user) {
    res.status(403);
  }
  let isSame;
  try {
    isSame = await bcrypt.compare(password, user.password);
  } catch (err) {
    res.status(403);
  }
  if (!isSame) {
    res.status(403);
  }
  req.session.user = user;
  res.send(user);
}

async function logoutUser(req, res) {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
}
module.exports = { createUser, loginUser, logoutUser };
