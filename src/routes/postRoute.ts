const { Router } = require('express');
const { validToken } = require('../middlewares/tokenValidation');

const postController = require('../controllers/postController');

const postRouter = Router();

postRouter.get('/posts', validToken, postController.findAll);
postRouter.post('/post', postController.create);

export default postRouter;