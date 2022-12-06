const { Router } = require('express');

const loginController = require('../controllers/loginController');

const loginRouter = Router();

loginRouter.post('/login', loginController.login);

export default loginRouter;