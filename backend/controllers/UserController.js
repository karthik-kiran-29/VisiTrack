import { userModel } from "../modals/UserModal.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SignUp = async (req, res) => {
    try {
        const {name,email,password} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
// Store hash in your password DB

        const document = {
            name: name,
            email: email,
            password: hash
        }

        const result = await userModel.create(document);

        const token = jwt.sign(result._id.toString(), process.env.TOKEN_KEY);

        res.cookie('token',token, {
            withCredentials: true,
            httpOnly: true,
            secure: true, // Required for HTTPS
            sameSite: 'none', // Required for cross-domain
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
            path: '/'
        })

        return res.json({ status: true, result });

    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}

const SignIn = async (req, res) => {
    try {
        const {email,password} = req.body;

        const document = {
            email: email,
        }

        const result = await userModel.findOne(document);
        
        if(!result){
            return res.status(500).json({ status: false, message: "User Does not Exist" });
        }

        if(await bcrypt.compare(password, result.password)){
            const token = jwt.sign(result._id.toString(), process.env.TOKEN_KEY);

            res.cookie('token',token, {
                withCredentials: true,
                httpOnly: true,
                secure: true, // Required for HTTPS
                sameSite: 'none', // Required for cross-domain
                maxAge: 24 * 60 * 60 * 1000, // 24 hours
                path: '/'
            })

            return res.json({ status: true, result });
        }else{
            return res.status(404).json({ status: false, message: "Enter Valid Password" });
        }
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}

export { SignUp,SignIn };