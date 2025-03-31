import express from 'express';
import { deleteAcessKey, getAcessKey, postAcessKey } from '../controllers/AcessKeyController.js';

const AcessKeyRouter = express.Router();

AcessKeyRouter.route("/key").get(getAcessKey).post(postAcessKey).delete(deleteAcessKey);

export default AcessKeyRouter;