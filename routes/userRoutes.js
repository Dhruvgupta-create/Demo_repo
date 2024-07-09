import express from "express"
import { updateUser,getAllUser,getSingleUser,deleteUser } from "../controllers/userController.js";

const router=express.Router();
router.put("/updateUser/:id",updateUser)
router.get("/getAllUser",getAllUser)
router.get("/getSingleUser/:id",getSingleUser)
router.delete("/deleteUser/:id",deleteUser)

export default router;