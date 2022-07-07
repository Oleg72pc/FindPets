const authRouter = require('express').Router();
const { loginUser, logoutUser } = require('../controller/authController');

authRouter.post('/login', loginUser);
authRouter.delete('/logout', logoutUser);

module.exports = authRouter;
