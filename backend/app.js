const express = require('express');
const config = require('./config/index');
const { sequelize } = require('./db/models');

// require routes
const authRouter = require('./routes/auth.routes');
const regRouter = require('./routes/reg.routes');
const logRouter = require('./routes/log.routes');

const app = express();
const PORT = process.env.PORT ?? 4000;
config(app);

// routes use
app.use('/register', regRouter);
app.use('/login', logRouter);
app.use('/auth', authRouter);

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
