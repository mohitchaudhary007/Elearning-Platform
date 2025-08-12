import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
};