const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

// Schema to make a new book

const BookSchema = new Schema({
  title: { type: String, require: true },
  author: String,
  genre: String,
  img: String,
  filmAdaptation: Boolean,
  description: String,
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
