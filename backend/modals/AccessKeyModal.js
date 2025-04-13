import mongoose, { Schema } from "mongoose";

const AcessKeySchema = mongoose.Schema({
    userid:{type:Schema.Types.ObjectId,ref:"users",required:"true"},
    count:{type:Number,required: true,default:0},
    name:{type:String,default:"Untitled"}
})

const AcessKeyModal = mongoose.model('AcessKey',AcessKeySchema);

export {AcessKeyModal};