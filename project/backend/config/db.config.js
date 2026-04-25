import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./env/.env" });

const connectDB = async () => {
  //todo-> retrying process should be there
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

//suggestions:try to use IIFE for better memory management

export default connectDB;
