import { userModel } from "../modals/UserModal.js";
import jwt from 'jsonwebtoken';

const SignUp = async (req, res,next) => {
    try {
        const {name,email,password} = req.body;

        const document = {
            name: name,
            email: email,
            password: password
        }

        const result = await userModel.create(document);

        const token = jwt.sign(result._id.toString(), process.env.TOKEN_KEY);

        res.cookie('token',token, {
            withCredentials: true,
            httpOnly: false,
          })

        res.json({ status: "success", data: result });

        next();
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

const SignIn = async (req, res,next) => {
    try {
        const {email,password} = req.body;

        const document = {
            email: email,
        }

        const result = await userModel.findOne(document);
        
        if(!result){
            return res.status(500).json({ status: "error", message: "User Does not Exist" });
        }

        if(result.password === password){
            const token = jwt.sign(result._id.toString(), process.env.TOKEN_KEY);

            res.cookie('token',token, {
                withCredentials: true,
                httpOnly: false,
            })

            res.json({ status: "success", data: result });

            next();
        }else{
            return res.status(404).json({ status: "error", message: "Enter Valid Password" });
        }
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

export { SignUp,SignIn };