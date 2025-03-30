import express from 'express';
import { SignUp,SignIn } from '../controllers/UserController.js';

const UserRoute = express.Router();

UserRoute.route("/signup").post(SignUp);

UserRoute.route("/signin").post(SignIn);

export {UserRoute};