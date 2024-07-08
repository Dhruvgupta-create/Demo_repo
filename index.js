import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { dbConnection } from "./database/dbconnection.js"
import userRouter from "./routes/userRoutes.js"

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

app.use("/api/v1/user",userRouter)


app.listen(port, () => {
    dbConnection();
     console.log("Server is listening to Port:"+port);
})

