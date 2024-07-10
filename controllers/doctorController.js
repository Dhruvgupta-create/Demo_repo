import { query } from "express";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async(req,res)=> {
    const id=req.params.id;

    try {
         const updatedDoctor=await Doctor.findByIdAndUpdate(id, {$set:req.body},{new:true})

         res.status(200).json({success:true , message:'Successfully updated',data:updatedDoctor})
    } catch (error) {
        res.status(500).json({success:false , message:'Failed update'});
    }
}

export const deleteDoctor = async(req,res)=> {
    const id=req.params.id;

    try {
         await Doctor.findByIdAndDelete(id)

         res.status(200).json({success:true , message:'Successfully deleted'})
    } catch (error) {
        res.status(500).json({success:false , message:'Failed to delete'});
    }
}


export const getSingleDoctor = async(req,res)=> {
    const id=req.params.id;

    try {         
         const singleDoctor=await Doctor.findById(id).select("-password")

         res.status(200).json({success:true , message:'Doctor Found',data:singleDoctor})
    } catch (error) {
        res.status(500).json({success:false , message:'Doctor Not FOund'});
    }
}

export const getAllDoctor = async(req,res)=> {

    try {         
        const {query}=req.query;
        let Doctors;

        if (query) {
            Doctors= await Doctor.find({isApproved:"approved" ,
                                         $or:[
                                            {name:{ $regex : query , $options : "i"} },
                                            {specialization : {$regex : query , $options : "i"}},
                                         ],}).select("-password");
            
        } else {
            Doctors=await Doctor.find({isApproved:"approved"}).select("-password");
        }
          

         res.status(200).json({success:true , message:' All Doctors Found',data:Doctors})
    } catch (error) {
        res.status(500).json({success:false , message:'Doctor Not FOund'});
    }
}