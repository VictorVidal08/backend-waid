const { Router } = require('express');

const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/users', userController.findAll);

export default userRouter;