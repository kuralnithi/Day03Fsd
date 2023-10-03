import dotenv from "dotenv";
import mongoose from "mongoose";





export const ConnectDB = async () => {

     dotenv.config();

    const mongoDbUrl = process.env.MONGODBCONNECTIONSTRING;
    const connection = await mongoose.connect(mongoDbUrl);

    console.log("connected to mongoDB");
 
    return connection;
}

