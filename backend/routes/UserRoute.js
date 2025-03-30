import express from 'express';
import { AddUser } from '../controllers/UserController.js';

const UserRoute = express.Router();

UserRoute.route("/user").post(AddUser);

export {UserRoute};