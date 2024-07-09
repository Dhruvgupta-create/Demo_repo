import express from "express"
import { updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor } from "../controllers/doctorController.js";

const router=express.Router();
router.put("/updateDoctor/:id",updateDoctor)
router.get("/getAllDoctor",getAllDoctor)
router.get("/getSingleDoctor/:id",getSingleDoctor)
router.delete("/deleteDoctor/:id",deleteDoctor)

export default router;