import express from 'express';
import { connectDB } from './config/connectDB.js';
const app = express();
import dotenv from 'dotenv';
import { UserRoute } from './routes/UserRoute.js';
import cookieParser from 'cookie-parser';
import AuthMiddleware from './middleware/AuthMiddleware.js';
import AcessKeyRouter from './routes/AcessKeyRoute.js';
import VisitorRouter from './routes/VisitorRoute.js';
import cors from 'cors';

dotenv.config()

app.use(cors({origin: process.env.FRONTEND_URL, // 👈 must match frontend
    credentials: true }));
app.use(cookieParser());
app.use(express.json());

connectDB();
app.use("/api",VisitorRouter);
app.use("/api/v1",UserRoute);
app.use("/api/auth",AuthMiddleware, AcessKeyRouter);

app.listen(3000)