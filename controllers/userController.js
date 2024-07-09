import User from "../models/UserSchema.js";

export const updateUser = async(req,res)=> {
    const id=req.params.id;

    try {
         const updatedUser=await User.findByIdAndUpdate(id, {$set:req.body},{new:true})

         res.status(200).json({success:true , message:'Successfully updated',data:updatedUser})
    } catch (error) {
        res.status(500).json({success:false , message:'Failed update'});
    }
}

export const deleteUser = async(req,res)=> {
    const id=req.params.id;

    try {
         await User.findByIdAndDelete(id)

         res.status(200).json({success:true , message:'Successfully deleted'})
    } catch (error) {
        res.status(500).json({success:false , message:'Failed to delete'});
    }
}


export const getSingleUser = async(req,res)=> {
    const id=req.params.id;

    try {         
         const singleUser=await User.findById(id).select("-password")

         res.status(200).json({success:true , message:'User Found',data:singleUser})
    } catch (error) {
        res.status(500).json({success:false , message:'User Not FOund'});
    }
}

export const getAllUser = async(req,res)=> {

    try {         
         const users=await User.find({}).select("-password");

         res.status(200).json({success:true , message:' All Users Found',data:users})
    } catch (error) {
        res.status(500).json({success:false , message:'User Not FOund'});
    }
}