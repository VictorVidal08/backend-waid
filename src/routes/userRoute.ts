const { Router } = require('express');

const userController = require('../controllers/userController');
const { userValidation } = require('../middlewares/userValidation');

const userRouter = Router();

userRouter.get('/users', userController.findAll);
userRouter.post('/user', userValidation, userController.create);

export default userRouter;