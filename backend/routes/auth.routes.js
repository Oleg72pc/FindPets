const authRouter = require('express').Router();
const {
  loginUser, logoutUser, sessionUser, createUser,
} = require('../controller/authController');

authRouter.post('/login', loginUser);
authRouter.delete('/logout', logoutUser);
authRouter.get('/session', sessionUser);
authRouter.post('/registration', createUser);

module.exports = authRouter;
