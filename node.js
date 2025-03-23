/*import express from "express";
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
*/
/*
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
  .then(() => {
    console.log("MongoDB Connected Successfully");
    insertManualData(); // Call function to insert data manually
  })
  .catch((error) => console.error("MongoDB Connection Failed:", error));

// Define Mongoose Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

// Function to Insert Data Manually
const insertManualData = async () => {
  try {
    const user = new User({
      name: "John",
      email: "johndoe@example.com",
    });

    await user.save();
    console.log("User added manually:", user);
  } catch (error) {
    console.error("Error inserting user:", error);
  }
};

// Default Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5173;
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(express.json()); // Important for parsing JSON request bodies
app.use(cors());

// MongoDB Connection
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((error) => console.error("❌ MongoDB Connection Failed:", error));

// Define Mongoose Schema & Model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }, // Ensuring email is unique
});

const User = mongoose.model("User", userSchema);

// ✅ POST Route to Insert User Data
app.post("/api/users", async (req, res) => {
  console.log("🔹 Received POST request at /api/users");
  console.log("🔹 Request Body:", req.body); // Debugging log

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = new User({ name, email });
    await user.save();
    console.log("✅ User inserted:", user);
    res.status(201).json({ message: "User added successfully", user });
  } catch (error) {
    console.error("❌ Error inserting user:", error);
    res.status(500).json({ error: "Error inserting user" });
  }
});

// Default Route
app.get("/", (req, res) => {
  res.send("✅ Server is running.");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
