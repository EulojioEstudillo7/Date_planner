const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();



const DateModel = require("./models/Date");


const app = express();
const PORT = process.env.PORT || 5000;


// This is the Middleware 
app.use(cors());
app.use(express.json());

// Here I am connecting to mongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


//this will get all the dates
app.get("/api/dates", async (req, res) => {
    try {
      const dates = await DateModel.find().sort({ date: 1 });
      res.json(dates);
    } catch (err) {
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