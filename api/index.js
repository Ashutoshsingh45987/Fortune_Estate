import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();

// connetcting to the database
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{console.log("error");});

const App = express();

App.use(express.json());

App.listen(3000,()=>{
    console.log("The server is running on port 3000");
}); 

App.use("/api/user",userRouter);
App.use('/api/auth',authRouter);