const { Router } = require('express');

const postController = require('../controllers/postController');

const postRouter = Router();

postRouter.get('/posts', postController.findAll);

export default postRouter;