import express from "express"
import { updateUser,getAllUser,getSingleUser,deleteUser } from "../controllers/userController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";

const router=express.Router();
router.put("/updateUser/:id",authenticate,restrict(['patient']),updateUser)
router.get("/getAllUser",authenticate,restrict(['admin']),getAllUser)
router.get("/getSingleUser/:id",authenticate,restrict(['patient']),getSingleUser)
router.delete("/deleteUser/:id",authenticate,restrict(['patient']),deleteUser)

export default router;