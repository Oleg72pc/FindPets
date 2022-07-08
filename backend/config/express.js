const express = require('express');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const logger = require('morgan');
const reactSsrMiddleware = require('../middlewares/reactSsr');
const reactSsrError = require('../middlewares/reactSsrError');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET || 'G(8x>|Ai^"+&', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true,
  },
};

function expressConfig(app) {
  app.use(logger('dev'));
  app.use(express.static(`${__dirname}/../public`));
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  app.use(session(sessionConfig));

  app.use(reactSsrMiddleware);
  app.use(reactSsrError);
}

module.exports = expressConfig;
