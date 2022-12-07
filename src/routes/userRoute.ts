const { Router } = require('express');

const userController = require('../controllers/userController');
const { userValidation } = require('../middlewares/userValidation');
const { validToken } = require('../middlewares/tokenValidation');

const userRouter = Router();

userRouter.get('/users', validToken, userController.findAll);
userRouter.post('/user', userValidation, userController.create);


export default userRouter;