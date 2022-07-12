const express = require('express');
const path = require('path');
const config = require('./config/index');
const { sequelize } = require('./db/models');

// require routes
const authRouter = require('./routes/auth.routes');
const infoRouter = require('./routes/getInfo.routes');
const adRouter = require('./routes/ad.routes');
const userRouter = require('./routes/user.routes');

const app = express();
const PORT = process.env.PORT ?? 4000;
config(app);

// routes use
app.use('/auth', authRouter);
app.use('/getAnimalInfo', infoRouter);
app.use('/ad', adRouter);
app.use('/user', userRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, async () => {
  console.log(`S E R V E R S T A R T E D A T ${PORT} P O R T`);
  try {
    await sequelize.authenticate();
    console.log('БД-сервер подключен успешно');
  } catch (error) {
    console.log('БД-сервер не подключен');
    console.log(error.message);
  }
});
