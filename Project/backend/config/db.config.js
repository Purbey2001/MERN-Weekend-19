import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vikaskumar20012001:Vikas123@dummy.oyfzhlq.mongodb.net/project",
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default mongoDB;
