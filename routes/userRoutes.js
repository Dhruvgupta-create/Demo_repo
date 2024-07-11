import express from "express"
import { updateUser,getAllUser,getSingleUser,deleteUser } from "../controllers/userController.js";
import { authenticate } from "../auth/verifyToken.js";

const router=express.Router();
router.put("/updateUser/:id",authenticate,updateUser)
router.get("/getAllUser",getAllUser)
router.get("/getSingleUser/:id",getSingleUser)
router.delete("/deleteUser/:id",deleteUser)

export default router;