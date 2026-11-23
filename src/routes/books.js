const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

router.post("/", async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json(book);
});

router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

router.put("/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

router.delete("/:id", async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json({ message: "Book deleted" });
});

module.exports = router;