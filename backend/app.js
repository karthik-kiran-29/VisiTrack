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

app.use(cors({origin: "http://localhost:5173", // 👈 must match frontend
    credentials: true }));
app.use(cookieParser());
app.use(express.json());
dotenv.config()

connectDB();
app.use("/api",VisitorRouter);
app.use("/api/v1",UserRoute);
app.use("/api/auth",AuthMiddleware, AcessKeyRouter);

app.listen(3000)