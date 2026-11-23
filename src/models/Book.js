const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  status: {
    type: String,
    enum: ["to-read", "reading", "finished"],
    default: "to-read",
  },
});

module.exports = mongoose.model("Book", bookSchema);