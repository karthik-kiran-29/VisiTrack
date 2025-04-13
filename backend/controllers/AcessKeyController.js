import { AcessKeyModal } from "../modals/AccessKeyModal.js";

const postAcessKey = async (req,res) =>{
    const {id} = req.user;
    const {name} = req.body;

    if(!id){
        return res.status(401).json({status:false,message:"User Not Found"});
    }
    try {
        const result = await AcessKeyModal.create({userid:id,count:0,name});
        return res.json({status:true,result});
    } catch (error) {
        return res.status(500).json({status:false,message:error.message});
    }

}

const getAcessKey = async (req,res)=>{
    const {id} = req.user;

    if(!id){
        return res.status(401).json({status:false,message:"User Not Found"});
    }

    try {
        const result = await AcessKeyModal.find({userid:id});
        if(!result){
            return res.status(401).json({status:false,message:"Key Not Found"});
        }
        return res.json({status:true,result});
    } catch (error) {
        return res.status(500).json({status:false,message:"Request Not Processed"});
    }
}

const deleteAcessKey = async (req,res)=>{
    const {keyid} = req.body;

    if(!keyid){
        return res.status(401).json({status:false,message:"User Not Found"});
    }

    try {
        const keys = await AcessKeyModal.deleteOne({_id:keyid});
        const result = (keys.deletedCount==1)?(keys.deletedCount):"Api Not Found";
        return res.json({status:true,result});
    } catch (error) {
        return res.status(500).json({status:false,message:"Request Not Processed"});
    }
}

export {postAcessKey,getAcessKey,deleteAcessKey};