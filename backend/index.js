import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";
import Razorpay from "razorpay";
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialize Razorpay instance
export const instance = new Razorpay({
  key_id: process.env.Razorpay_Key,
  key_secret: process.env.Razorpay_Secret,
});

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Basic route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// Serve static uploads
app.use("/uploads", express.static("uploads"));

// Routes
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

// Start server
const port = process.env.PORT || 5000;

// For Vercel deployment
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
  });
} else {
  connectDb();
}

// Export for Vercel
export default app;