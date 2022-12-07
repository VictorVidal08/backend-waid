const { Router } = require('express');
const { validToken } = require('../middlewares/tokenValidation');

const postController = require('../controllers/postController');

const postRouter = Router();

postRouter.get('/posts', validToken, postController.findAll);
postRouter.post('/post', postController.create);
postRouter.delete('/post/:id', postController.deletePost);
postRouter.patch('/post/:id', postController.updatePost);

export default postRouter;