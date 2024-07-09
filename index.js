import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { dbConnection } from "./database/dbconnection.js"
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js"
import doctorRouter from "./routes/doctorRoutes.js"

dotenv.config();

const app=express();
const port=process.env.PORT || 8000

const corsOption={
    origin:true
};

app.get('/',(req,res) =>{
    res.send('Api is Working')
});


//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));

//for users
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/doctor",doctorRouter)


app.listen(port, () => {
    dbConnection();
     console.log("Server is listening to Port:"+port);
})

