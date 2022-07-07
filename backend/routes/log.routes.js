const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { phoneNumber, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        phoneNumber,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.uid = user.id;
      req.session.user = user;
      res.json(user);
    } else {
      res.status(304).json({
        text: 'Неверный пароль или телефон',
      });
    }
  } catch (error) {
    console.log(error);
  }
}).get('/', (req, res) => {
  res.send('Hello');
});

module.exports = router;
