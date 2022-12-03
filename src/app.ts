import express from 'express';
import 'express-async-errors';
// import userRouter from './routes/users';
require('dotenv').config();

const app = express();
app.use(express.json());
// app.use(userRouter);

export default app;
