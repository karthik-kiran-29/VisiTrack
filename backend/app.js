import express from 'express';
import { connectDB } from './config/connectDB.js';
const app = express();
import dotenv from 'dotenv';
import { UserRoute } from './routes/UserRoute.js';
import cookieParser from 'cookie-parser';
import AuthMiddleware from './middleware/AuthMiddleware.js';
import { AuthRoute } from './routes/AuthRoute.js';

app.use(cookieParser());
app.use(express.json());
dotenv.config()

connectDB();

app.use("/api/v1",UserRoute);
app.use("/",AuthRoute);

app.listen(3000)