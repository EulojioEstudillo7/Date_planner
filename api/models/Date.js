const mongoose = require("mongoose");

const DateSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  note: { type: String },
});

module.exports = mongoose.model("Date", DateSchema);