import { AcessKeyModal } from "../modals/AccessKeyModal.js";

const postAcessKey = async (req,res) =>{
    const {id} = req.user;

    if(!id){
        return res.status(401).json({status:false,message:"User Not Found"});
    }
    try {
        const key = await AcessKeyModal.insertOne({userid:id});
        return res.json({status:true,key});
    } catch (error) {
        return res.status(500).json({status:false,message:"Request Not Processed"});
    }

}

const getAcessKey = async (req,res)=>{
    const {id} = req.user;

    if(!id){
        return res.status(401).json({status:false,message:"User Not Found"});
    }

    try {
        const keys = await AcessKeyModal.find({userid:id});
        return res.json({status:true,keys});
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
        return res.json({status:true,keys});
    } catch (error) {
        return res.status(500).json({status:false,message:"Request Not Processed"});
    }
}

export {postAcessKey,getAcessKey,deleteAcessKey};