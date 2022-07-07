const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const {  } = req.body;
  const user = await User.findOne({
    where: {
      phoneNumber,
    },
  });
  if (user) {
    res.status(401).json({
      text: 'Такой номер телефона уже зарегистрирован',
    });
  } else {
    const newUser = await User.create({
      userName,
      password: await bcrypt.hash(password, 10),
      isAdmin,
      phoneNumber,
    });
    req.session.user = newUser;
    req.session.uid = newUser.id;
    res.json(newUser);
  }
});

module.exports = router;
