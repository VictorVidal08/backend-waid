import express from 'express';
import 'express-async-errors';
import userRouter from './routes/userRoute';
import postRouter from './routes/postRoute';
import loginRouter from './routes/loginRoute';

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);
app.use(loginRouter);

export default app;
