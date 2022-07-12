const userRouter = require('express').Router();
const { getUser } = require('../controller/userController');

userRouter.get('/:userId', getUser);

module.exports = userRouter;
