require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
console.log("MONGO_URI from .env:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DateModel = require("./models/Date");
 

// Here I am connecting to mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


app.get("/test", (req, res) => {
  res.send("Backend is working!");
});
//this will get all the dates
app.get("/api/dates", async (req, res) => {
  console.log("GET /api/dates called");
  try {
    const dates = await DateModel.find().sort({ date: 1 });
    console.log("Found dates:", dates);
    res.json(dates);
  } catch (err) {
    console.error("Error fetching dates:", err);
    res.status(500).json({ message: "Server error" });
  }
});
//this is the route for adding a new date
app.post("/api/dates", async (req, res) => {
    try {
      const newDate = new DateModel(req.body);
      const savedDate = await newDate.save();
      res.status(201).json(savedDate);
    } catch (err) {
      res.status(400).json({ message: "Invalid input" });
    }
  });

  //This will update an entry
app.put("/api/dates/:id", async (req, res) => {
  try {
    const updated = await DateModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Failed to update date" });
  }
});

//This will delete an entry
app.delete("/api/dates/:id", async (req, res) => {
  try {
    await DateModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Date deleted" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete date" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});