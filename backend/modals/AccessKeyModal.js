import mongoose, { Schema } from "mongoose";

const AcessKeySchema = mongoose.Schema({
    userid:{type:Schema.Types.ObjectId,ref:"users",required:"true"},
    count:{type:Number,required: true,unique:true,default:0}
})

const AcessKeyModal = mongoose.model('AcessKey',AcessKeySchema);

export {AcessKeyModal};