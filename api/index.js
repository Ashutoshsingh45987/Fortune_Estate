import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

 //connetcting to the database

 const connectDb = async() =>{
 try {
     await mongoose.connect(process.env.MONGO).then(()=>{
     console.log("connected to mongodb");

 }) 
 }catch (error) {
     console.log(error);
 }
 }

 connectDb()

//   mongoose.connect(process.env.MONGO).then(()=>{
//       console.log("connected to mongodb");
//   }).catch((error)=>{console.log(error);});

const App = express();

App.use(express.json());
App.use(cookieParser());

App.listen(3000,()=>{
    console.log("The server is running on port 3000");
}); 


App.use("/api/user",userRouter);
App.use('/api/auth',authRouter);
App.use('/api/listing',listingRouter);

App.use((err,req,res ,next)=>{
    const statusCode= err.statusCode||500;                       //This is a middleware for error handling ..we will use 'next' to use in further
    const message= err.message||"internal server error";
    return(res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message
        }
    ));

});