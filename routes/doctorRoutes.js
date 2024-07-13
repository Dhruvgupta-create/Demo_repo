import express from "express"
import { updateDoctor,deleteDoctor,getAllDoctor,getSingleDoctor } from "../controllers/doctorController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
import reviewRouter from "./reviewRoutes.js";

const router=express.Router();

//nested routes
router.use("/:doctorId/reviews",reviewRouter);
router.put("/updateDoctor/:id",authenticate,restrict(['doctor']),updateDoctor)
router.get("/getAllDoctor",getAllDoctor)
router.get("/getSingleDoctor/:id",getSingleDoctor)
router.delete("/deleteDoctor/:id",authenticate,restrict(['doctor']),deleteDoctor)

export default router;