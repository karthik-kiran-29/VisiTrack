import express from 'express';
import getKeyCount from '../controllers/VisitorController.js';

const VisitorRouter = express.Router();

VisitorRouter.route("/visitor/:id").get(getKeyCount);

export default VisitorRouter;