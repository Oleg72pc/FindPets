const express = require('express');
const config = require('./config/index');
const { sequelize } = require('./db/models');

// require routes

const app = express();
const PORT = process.env.PORT ?? 4000;
config(app);

// routes use

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
