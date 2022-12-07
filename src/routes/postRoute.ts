const { Router } = require('express');
const { validToken } = require('../middlewares/tokenValidation');

const postController = require('../controllers/postController');

const postRouter = Router();

postRouter.get('/posts', validToken, postController.findAll);

export default postRouter;