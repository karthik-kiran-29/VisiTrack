import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
          type: String,
          required: "true",
          unique:"true"
        },
        email:{
            type:String,
            required: "true",
            unique:"true"
        },
        password:{
            type:String,
            required:"true"
        }
    }    
)

const userModel = mongoose.model("User",userSchema);

export {userModel};