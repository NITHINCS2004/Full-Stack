import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5173;
const MONGO_URL = process.env.MONGO_URL;

// MongoDB Connection
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.error("MongoDB Connection Failed:", error));

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
