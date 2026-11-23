const express = require("express");
const connectDB = require("./db");

const app = express();
app.use(express.json());

const booksRoutes = require("./routes/books");
app.use("/books", booksRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Books API running on port", process.env.PORT);
  });
});