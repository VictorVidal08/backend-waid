const { Router } = require('express');

const loginController = require('../controllers/loginController');
const { loginValidation } = require('../middlewares/loginValidation');

const loginRouter = Router();

loginRouter.post('/login', loginValidation,loginController.login);

export default loginRouter;