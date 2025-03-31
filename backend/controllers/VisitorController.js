import { AcessKeyModal } from "../modals/AccessKeyModal.js";

const getKeyCount = async (req,res) =>{
    const id = req.params.id;

    if(!id){
        return res.status(401).json({status:false,message:"Api Not Fount"});
    }

    try {
        const result = await AcessKeyModal.findOneAndUpdate({_id:id},{ $inc: { count: 1 } });
        if(!result){
            return res.status(401).json({status:false,message:"Api Not Fount"});
        }
        result.count++;
        return res.json({status:true,result:result.count});
    } catch (error) {
        return res.status(500).json({status:false,message: error.message})
    }
}

export default getKeyCount;