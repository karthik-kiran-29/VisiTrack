import mongoose from "mongoose"

const connectDB = () =>{
    try {
        mongoose.connect(process.env.DATABASE_URL).then(()=>{
            console.log("Connection Successful!!")
        })
    } catch (error) {
        console.log("Failed with error:",error)
    }
}

export {connectDB};