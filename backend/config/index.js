require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');

const sessionConfig = require('./sessionConfig');
const corsConfig = require('./corsConfig');

const config = (app) => {
  // cors
  app.use(cors(corsConfig));

  // set
  app.set('views', path.join(process.env.PWD, 'views'));

  // use
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(process.env.PWD, 'public')));
  app.use(logger('dev'));

  // sessions
  app.use(cookieParser());
  app.use(session(sessionConfig));
};

module.exports = config;
