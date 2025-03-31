import jwt from 'jsonwebtoken';
import { userModel } from '../modals/UserModal.js';

const AuthMiddleware = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ status: false, message: "No token provided" });
    }

    try {
        const data = jwt.verify(token, process.env.TOKEN_KEY);
        const user = await userModel.findById(data);
        
        if (user) {
            req.user = {id:user._id}; // Attach user to request object
            next(); // Proceed to the next middleware
        } else {
            return res.status(401).json({ status: false, message: "User not found" });
        }
    } catch (err) {
        return res.status(401).json({ status: false, message: "Invalid token" });
    }
};

export default AuthMiddleware;