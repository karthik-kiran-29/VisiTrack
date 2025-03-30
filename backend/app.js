import express from 'express';
import { connectDB } from './config/connectDB.js';
const app = express();
import dotenv from 'dotenv';
import { UserRoute } from './routes/UserRoute.js';
app.use(express.json());

dotenv.config()

connectDB();

app.use("/api/v1",UserRoute);

app.listen(3000)