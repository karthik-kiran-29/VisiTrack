import express from 'express';
import AuthMiddleware from '../middleware/AuthMiddleware.js';

const AuthRoute = express.Router();

// In AuthRoute.js
AuthRoute.route("/").post(AuthMiddleware, (req, res) => {
    res.json({ 
      status: true, 
      message: "Authentication successful", 
      user: req.user.name 
    });
  });

export {AuthRoute};