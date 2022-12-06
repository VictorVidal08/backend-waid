import express from 'express';
import 'express-async-errors';
import userRouter from './routes/userRoute';
import postRouter from './routes/postRoute';

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

export default app;
